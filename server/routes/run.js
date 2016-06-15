var runValidator = require("../RunValidator.js");
var moment = require("moment");
var async = require("async");

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
            var inputs = req.body.inputs.split("|");
            for (var i in inputs) {
                var inps = inputs[i].split(",");
                inputs[i] = {};
                for (var j in inps) {
                    inputs[i][inps[j]] = true;
                }
            }

            async.waterfall([
                function (callback) {
                    mysql.map.getMap(req.params.map, function (err, rows) {
                        if (err) {
                            res.json({ error: "Problem getting map" });
                            callback(true);
                            return;
                        }

                        if (rows.length == 0) {
                            res.json({ error: "Map doesn't exist" });
                            callback(true);
                            return;
                        }

                        var valid = runValidator.runIsValid(rows[0], inputs);
                        if (valid == false) {
                            res.json({ error: "Error run" });
                            callback(true);
                            return;
                        }

                        var dataRun = {
                            id_m: rows[0].id_m,
                            id_u: req.connected.id,
                            time: valid.time,
                            positions: valid.positions,
                        };
                        callback(null, dataRun);
                    });
                },
                function (dataRun, callback) {
                    mysql.user.getUserById(req.connected.id, function (err, rows) {
                        if (err) {
                            res.json({ error: "Problem getting user" });
                            callback(true);
                            return;
                        }

                        if (rows.length == 0) {
                            res.json({ error: "User doesn't exist" });
                            callback(true);
                            return;
                        }

                        var user = rows[0];

                        var randomReward = getRandomRewards(user);
                        callback(null, dataRun, user, randomReward);
                    });
                },
                function (dataRun, user, randomReward, callback) {
                    mysql.map.getCurrentMap(function (err, rows) {
                        if (err) {
                            res.json({ error: "Error getting current map" });
                            callback(true);
                            return;
                        }

                        if (rows.length == 0) {
                            res.json({ error: "No current map" });
                            callback(true);
                            return;
                        }

                        var currentMap = rows[0];

                        dataRun.ranked = 0;
                        if (currentMap.id_m == dataRun.id_m) {
                            dataRun.ranked = 1;
                        }
                        callback(null, dataRun, user, currentMap, randomReward);
                    });
                },
                function (dataRun, user, currentMap, randomReward, callback) {
                    mysql.run.getUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, function (err, rows) {
                        if (err) {
                            res.json({ error: "Error getting user run" });
                            callback(true);
                            return;
                        }

                        var medailsRewards = {
                            //MASTER
                            0: {
                                golds: 100,
                                xp: 100,
                            },
                            //GOLD
                            1: {
                                golds: 80,
                                xp: 80,
                            },
                            //SILVER
                            2: {
                                golds: 50,
                                xp: 50,
                            },
                            //BRONZE
                            3: {
                                golds: 30,
                                xp: 30,
                            }
                        };

                        var NB_MAP_REWARD = 10;
                        if(currentMap.id_m - dataRun.id_m > NB_MAP_REWARD){
                            //If mal older than 10 maps => no rewards
                            medailsRewards = {};
                        }

                        if (rows.length == 0) {
                            //NEW RUN
                            if (dataRun.ranked) {
                                //Ranked
                                res.json({ time: dataRun.time, best: true, randomReward: randomReward });
                            } else {
                                //Unranked
                                getMedailsRuns(dataRun.id_m, function (medails) {
                                    var newMedail = getMedail(dataRun.time, medails);
                                    var rewards = getRewards(medailsRewards, newMedail);
                                    if (rewards != null) {
                                        for (var i in rewards) {
                                            if (user[i] != undefined) {
                                                user[i] += rewards[i];
                                            }
                                        }
                                    }
                                    mysql.user.updateUser({ golds: user.golds, xp: user.xp }, user.id_u);
                                    res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards, randomReward: randomReward });
                                });

                            }
                            mysql.run.addRun(dataRun);
                        } else {
                            //ANOTHER RUN
                            if (rows[0].time > dataRun.time) {
                                //BEST TIME
                                if (dataRun.ranked) {
                                    //Ranked
                                    res.json({ time: dataRun.time, best: true, randomReward: randomReward });
                                } else {
                                    //Unranked => medails
                                    getMedailsRuns(dataRun.id_m, function (medails) {
                                        var newMedail = getMedail(dataRun.time, medails);
                                        var oldMedail = getMedail(rows[0].time, medails);
                                        if (newMedail < oldMedail) {
                                            var rewards = getRewards(medailsRewards, newMedail, oldMedail);
                                            if (rewards != null) {
                                                for (var i in rewards) {
                                                    if (user[i] != undefined) {
                                                        user[i] += rewards[i];
                                                    }
                                                }
                                            }
                                        }
                                        mysql.user.updateUser({ golds: user.golds, xp: user.xp }, user.id_u);
                                        res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards, randomReward: randomReward });
                                    });
                                }
                                //update time
                                mysql.run.updateUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, dataRun);
                            } else {
                                //no best time
                                res.json({ time: dataRun.time, best: false, randomReward: randomReward });
                            }
                        }
                    });
                }
            ]);
        } else {
            res.json({ error: "Inputs needed" });
        }
    });

    router.get("/best/:map/:ranked?/:limit?/:offset?", function (req, res) {
        var limit = 100;
        if (req.params.limit) {
            limit = parseInt(req.params.limit);
        }

        var offset = 0;
        if (req.params.offset) {
            offset = parseInt(req.params.offset);
        }

        var ranked = null;
        if (req.params.ranked) {
            ranked = (req.params.ranked == 1) ? 1 : 0;
        }

        mysql.run.getMapBestRuns(req.params.map, limit, ranked, offset, function (err, rows) {
            if (err) {
                res.json({ error: "Error getting bests" });
                return;
            }
            res.json(rows);
        })
    });

    router.get("/ghost/:map/:limit?", function (req, res) {
        var limit = 10;
        if (req.params.limit) {
            limit = parseInt(req.params.limit);
        }

        async.waterfall([
            function (callback) {
                mysql.map.getMap(req.params.map, function (err, rows) {
                    if (err) {
                        res.json({ error: "Error getting map" });
                        callback(err);
                        return;
                    }

                    if (rows.length == 0) {
                        res.json({ error: "Map doesn't exist" });
                        callback(true);
                        return;
                    }

                    var map = rows[0];
                    callback(null, map)
                });
            },
            function (map, callback) {
                mysql.map.getCurrentMap(function (err, rows) {
                    if (err) {
                        res.json({ error: "Error getting current map" });
                        callback(err);
                        return;
                    }

                    if (rows.length == 0) {
                        res.json({ error: "No current map" });
                        callback(true);
                        return;
                    }

                    if (rows[0].id_m == map.id_m) {
                        //CURRENT
                        if (req.connected) {
                            //CONNECTED
                            var ghosts = [];

                            async.waterfall([
                                function (callback2) {
                                    mysql.run.getUserMapRun(req.connected.id, map.id_m, 1, function (err, rows) {
                                        if (!err && rows.length > 0) {
                                            limit--;
                                            rows[0].me = true;
                                            ghosts.push(rows[0]);
                                        }
                                        callback2(null);
                                    });
                                },
                                function (callback2) {
                                    mysql.run.getFollowingRuns(req.connected.id, map.id_m, 1, function (err, rows) {
                                        if (!err) {
                                            for (var i in rows) {
                                                rows[i].follow = true;
                                            }
                                            ghosts = ghosts.concat(rows);
                                            limit -= rows.length;
                                            if (limit < 1) {
                                                limit = 1;
                                            }
                                        }
                                        callback2(null);
                                    });
                                },
                                function (callback2) {
                                    mysql.run.getMapBestRuns(map.id_m, limit, 1, 0, function (err, rows) {
                                        if (!err) {
                                            for (var i in rows) {
                                                var alreadyIn = false;
                                                for (var j in ghosts) {
                                                    if (ghosts[j].id_u == rows[i].id_u) {
                                                        alreadyIn = true;
                                                        break;
                                                    }
                                                }
                                                if (!alreadyIn) {
                                                    ghosts.push(rows[i]);
                                                }
                                            }
                                        }
                                        res.json(ghosts);
                                    });
                                }
                            ]);
                        } else {
                            //GUEST
                            mysql.run.getMapBestRuns(map.id_m, limit, 1, 0, function (err, rows) {
                                if (err) {
                                    res.json({ error: "Error getting ghosts" });
                                    callback(true);
                                    return;
                                }
                                res.json(rows);
                                callback(null, true);
                            });
                        }
                    } else {
                        //NOT CURRENT
                        var ghosts = [];

                        getMedailsRuns(map.id_m, function (medails) {
                            if (medails) {
                                ghosts = medails;
                            }

                            if (req.connected) {
                                //CONNECTED
                                mysql.run.getUserMapRun(req.connected.id, map.id_m, 0, function (err, rows) {
                                    if (rows.length > 0) {
                                        rows[0].me = true;
                                        ghosts.push(rows[0]);
                                    }
                                    mysql.run.getFollowingRuns(req.connected.id, map.id_m, 0, function (err, rows) {
                                        for (var i in rows) {
                                            rows[i].follow = true;
                                            ghosts.push(rows[i]);
                                        }

                                        res.json(ghosts);
                                    });
                                });
                            } else {
                                //GUEST
                                res.json(ghosts);
                            }
                        });
                    }
                });
            }
        ]);
    });

    router.get("/all/:user?", function(req, res){
        if(req.params.user){
            async.waterfall([
                function(callback){
                    mysql.user.getUserByLogin(req.params.user, function(err, rows){
                        if(err){
                            res.json({error:"Can't get user"});
                            callback(err);
                            return;
                        }
                        if(rows.length == 0){
                            res.json({error:"User doesn't exist"});
                            callback(true);
                            return;
                        }

                        callback(null, rows[0]);
                    });
                },
                function(user, callback){
                    mysql.run.getUserRuns(user.id_u, null, function(err, rows){
                        if(err){
                            res.json({error:"Can't get user runs"});
                            callback(err);
                            return;
                        }
                        res.json(rows);
                        callback(null);
                    });
                }
                ]);

        }else{
            if(req.connected){
                //connected
                mysql.run.getUserRuns(req.connected.id, null, function(err, rows){
                    if(err){
                        res.json({error:"Can't get user runs"});
                        return;
                    }
                    res.json(rows);
                })
            }else{
                res.json([]);
            }
        }
    })

    var getMedailsRuns = function (mapid, cb) {
        var nbRun = 0;
        var ghosts = [];
        var percentage = {
            gold: 0.1,
            silver: 0.3,
            bronze: 0.6
        };

        async.waterfall([
            function (callback) {
                mysql.run.getNbRuns(mapid, 1, function (err, rows) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    nbRun = rows[0].nb;
                    callback(null, nbRun);
                });
            },
            function (nbRun, callback) {
                async.parallel([
                    function (callback2) {
                        mysql.run.getOffsetRuns(mapid, 0, function (err, rows) {
                            if (!err && rows.length > 0) {
                                rows[0].medal = 0;
                                callback2(null, rows[0]);
                            } else {
                                callback2(true);
                            }
                        });
                    },
                    function (callback2) {
                        mysql.run.getOffsetRuns(mapid, Math.floor(nbRun * percentage.gold), function (err, rows) {
                            if (!err && rows.length > 0) {
                                rows[0].medal = 1;
                                callback2(null, rows[0]);
                            } else {
                                callback2(true);
                            }
                        });
                    },
                    function (callback2) {
                        mysql.run.getOffsetRuns(mapid, Math.floor(nbRun * percentage.silver), function (err, rows) {
                            if (!err && rows.length > 0) {
                                rows[0].medal = 2;
                                callback2(null, rows[0]);
                            } else {
                                callback2(true);
                            }
                        });
                    },
                    function (callback2) {
                        mysql.run.getOffsetRuns(mapid, Math.floor(nbRun * percentage.bronze), function (err, rows) {
                            if (!err && rows.length > 0) {
                                rows[0].medal = 3;
                                callback2(null, rows[0]);
                            } else {
                                callback2(true);
                            }
                        });
                    }
                ], function (err, res) {
                    for (var i in res) {
                        ghosts.push(res[i]);
                    }
                    callback();
                });
            }
        ], function (err, res) {
            cb(ghosts);
        });

    }

    var getMedail = function (time, medails) {
        for (var i in medails) {
            if (time <= medails[i].time) {
                return i;
            }
        }
        return null;
    }

    var getRewards = function (rewards, newmedail, oldmedail) {
        var toreward = {};
        if (oldmedail == null) {
            oldmedail = 10;
        }
        if (oldmedail >= newmedail) {
            null;
        }

        for (var i = oldmedail - 1; i >= newmedail; i--) {
            if (rewards[i]) {
                for (var j in rewards[i]) {
                    if (toreward[j] == undefined) {
                        toreward[j] = 0;
                    }
                    toreward[j] += rewards[i][j];
                }
            }
        }
        return toreward;
    }

    var getRandomRewards = function (user) {
        var rreward = {};

        var rrewardsweigths = {
            no: 80,
            golds: 10,
            xp: 10,
            gems: 1
        };

        var rrewardsSum = 0;
        for (var i in rrewardsweigths) {
            rrewardsSum += rrewardsweigths[i];
            rrewardsweigths[i] = rrewardsSum;
        }

        var rrewardsweigthsRandom = Math.floor(Math.random() * rrewardsSum + 1);

        if (user.nextdrop && user.nextdrop > Date.now() / 1000) {
            return rreward;
        }

        var nextDrop = Date.now() + 1000 * 60 * 60;

        var data = {
            nextdrop: Math.floor(nextDrop / 1000)
        };

        for (var i in rrewardsweigths) {
            if (rrewardsweigths[i] >= rrewardsweigthsRandom) {
                switch (i) {
                    case "golds":
                        var min = 50;
                        var max = 100;
                        var value = Math.floor(Math.random() * (max - min + 1) + min);
                        data.golds = user.golds + value;
                        mysql.user.updateUser(data, user.id_u);
                        rreward = { golds: value };
                        break;
                    case "xp":
                        var min = 200;
                        var max = 300;
                        var value = Math.floor(Math.random() * (max - min + 1) + min);
                        data.xp = user.xp + value;
                        mysql.user.updateUser(data, user.id_u);
                        rreward = { xp: value };
                        break;
                    case "gems":
                        var min = 10;
                        var max = 30;
                        var value = Math.floor(Math.random() * (max - min + 1) + min);
                        data.gems = user.gems + value;
                        mysql.user.updateUser(data, user.id_u);
                        rreward = { gems: value };
                        break;
                }
                break;
            }
        }
        return rreward;
    }

    return {
        getMedailsRuns: getMedailsRuns,
        getMedail: getMedail
    }
}

