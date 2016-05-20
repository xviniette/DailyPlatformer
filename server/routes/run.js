var runValidator = require("../RunValidator.js");

module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.post("/upload/:map", function (req, res) {
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }
        if (req.body.inputs) {
            try {
                var inputs = JSON.parse(req.body.inputs);
                mysql.map.getMap(req.params.map)
                    .then(function (rows) {
                        if (rows.length > 0) {
                            var valid = runValidator.runIsValid(rows[0], inputs);
                            if (valid !== false) {
                                var dataRun = {
                                    id_m: rows[0].id_m,
                                    id_u: req.connected.id,
                                    time: valid.time,
                                    positions: JSON.stringify(valid.positions),
                                    ranked: 1
                                }
                            }

                            mysql.map.getCurrentMap()
                                .then(function (row) {
                                    var ranked = 0;
                                    if (row[0].id_m == dataRun.id_m) {
                                        ranked = 1;
                                    }

                                    dataRun.ranked = ranked;

                                    mysql.run.getUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked)
                                        .then(function (rows) {
                                            if (rows.length > 0) {
                                                if (rows[0].time > dataRun.time) {
                                                    mysql.run.updateUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, dataRun).then().catch();
                                                    res.json({ time: dataRun.time, best: true });
                                                } else {
                                                    res.json({ time: dataRun.time, best: false });
                                                }
                                            } else {
                                                mysql.run.addRun(dataRun).then().catch();
                                                res.json({ time: dataRun.time, best: true });
                                            }
                                        }).
                                        catch(function (err) {
                                            console.log(err);
                                        });
                                });
                        }
                    });
            } catch (e) {
                res.json({ error: "Inputs problem" });
                return;
            }
        } else {
            res.json({ error: "Inputs needed" });
        }

    });


    router.get("/best/:map/:ranked?/:limit?", function (req, res) {
        var limit = 100;
        if (req.params.limit) {
            limit = parseInt(req.params.limit);
        }

        var ranked = null;
        if (req.params.ranked) {
            ranked = (req.params.ranked == 1) ? 1 : 0;
        }

        mysql.run.getMapBestRuns(req.params.map, limit, ranked)
            .then(function (rows) {
                res.json(rows);
            })
            .catch(function (err) {
                res.json({ error: "Error getting bests" });
            });
    });

    router.get("/ghost/:map/:limit?", function (req, res) {
        var limit = 10;
        if (req.params.limit) {
            limit = parseInt(req.params.limit);
        }

        mysql.map.getMap(req.params.map)
            .then(function (rows) {
                if (rows.length > 0) {
                    var map = rows[0];

                    mysql.map.getCurrentMap()
                        .then(function (rows) {
                            if (rows.length > 0) {

                                if (rows[0].id_m == map.id_m) {
                                    //CURRENT
                                    if (req.connected) {
                                        var ghosts = [];

                                        mysql.run.getUserMapRun(req.connected.id, map.id_m, 1)
                                            .then(function (rows) {
                                                if (rows.length > 0) {
                                                    limit--;
                                                    rows[0].me = true;
                                                    ghosts.push(rows[0]);
                                                }
                                                return mysql.run.getFollowingRuns(req.connected.id, map.id_m, 1);
                                            })
                                            .then(function (rows) {
                                                for (var i in rows) {
                                                    rows[i].follow = true;
                                                }

                                                ghosts = ghosts.concat(rows);
                                                limit -= rows.length;
                                                if (limit < 1) {
                                                    limit = 1;
                                                }
                                                return mysql.run.getMapBestRuns(req.params.map, limit, 1)
                                            })
                                            .then(function (rows) {
                                                for (var i in rows) {
                                                    var alreadyIn = false;
                                                    for (var j in ghosts) {
                                                        if (ghosts[i].id_u == rows[i].id_u) {
                                                            alreadyIn = true;
                                                            break;
                                                        }
                                                    }
                                                    if (!alreadyIn) {
                                                        ghosts.push(rows[i]);
                                                    }
                                                }
                                                res.json(ghosts);
                                            })
                                            .catch(function (err) {
                                                res.json({ error: "Error getting ghost" });
                                            });



                                    } else {
                                        //NOT CONNECTED
                                        mysql.run.getMapBestRuns(req.params.map, limit, 1)
                                            .then(function (rows) {
                                                res.json(rows);
                                            })
                                            .catch(function (err) {
                                                res.json({ error: "Error getting ghosts" });
                                            });
                                    }

                                } else {
                                    //NOT CURRENT => master/gold/silver/bronze
                                    var nbRun = 0;
                                    var ghosts = [];
                                    var percentage = {
                                        gold:0.1,
                                        silver:0.3,
                                        bronze:0.6
                                    };
                                    
                                    mysql.run.getNbRuns(map.id_m, 1)
                                        .then(function (rows) {
                                            nbRun = rows.nb;
                                            return mysql.run.getOffsetRuns(map.id_m, 0);
                                        })
                                        .then(function(rows){
                                            if(rows.length > 0){
                                                rows[0].medal = 0;
                                                ghosts.push(rows[0]);
                                            }

                                            return mysql.run.getOffsetRuns(map.id_m, Math.floor(nbRun * percentage.gold));
                                        })
                                        .then(function(rows){
                                            if(rows.length > 0){
                                                rows[0].medal = 1;
                                                ghosts.push(rows[0]);
                                            }

                                            return mysql.run.getOffsetRuns(map.id_m, Math.floor(nbRun * percentage.silver));
                                        })
                                        .then(function(rows){
                                            if(rows.length > 0){
                                                rows[0].medal = 2;
                                                ghosts.push(rows[0]);
                                            }

                                            return mysql.run.getOffsetRuns(map.id_m, Math.floor(nbRun * percentage.bronze));
                                        })
                                        .then(function(rows){
                                            if(rows.length > 0){
                                                rows[0].medal = 3;
                                                ghosts.push(rows[0]);
                                            }

                                            if(req.connected){

                                                mysql.run.getUserMapRun(req.connected.id, map.id_m, 1)
                                                .then(function(rows){
                                                    if(rows.length > 0){
                                                        rows[0].me = true;
                                                        ghosts.push(rows[0]);
                                                    }

                                                    return mysql.run.getFollowingRuns(req.connected.id, map.id_m, 1);
                                                })
                                                .then(function(rows){
                                                    for(var i in rows){
                                                        rows[i].follow = true;
                                                        ghosts.push(rows[i]);
                                                    }

                                                    res.json(ghosts);
                                                })
                                                .catch(function(err){
                                                    res.json(ghosts);
                                                });

                                            }else{
                                                res.json(ghosts);
                                            }
                                        }).
                                        catch(function(err){
                                            res.json(ghosts);
                                        });
                                }


                            } else {
                                res.json({ error: "No current map" });
                            }
                        })
                        .catch();

                } else {
                    res.json({ error: "Map doesn't exist" });
                }
            })
            .catch(function (err) {
                res.json({ error: "Error getting map" });
            });

    });

}