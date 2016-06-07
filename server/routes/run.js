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
                function(callback){
                    mysql.map.getMap(req.params.map, function (err, rows) {
                        if (err) {
                            res.json({error:"Problem getting map"});
                            callback(true);
                            return;
                        }

                        if(rows.length == 0){
                            res.json({error:"Map doesn't exist"});
                            callback(true);
                            return;
                        }

                        var valid = runValidator.runIsValid(rows[0], inputs);
                        if(valid == false){
                            res.json({ error: "Error run" });
                            callback(true);
                            return;
                        }

                        var dataRun = {
                            id_m: rows[0].id_m,
                            id_u: req.connected.id,
                            time: valid.time,
                            positions: JSON.stringify(valid.positions),
                        };
                        callback(null, dataRun);
                    }
                },
                function(dataRun, callback){
                    mysql.user.getUserById(req.connected.id, function (err, rows) {
                        if(err){
                            res.json({ error: "Problem getting user" });
                            callback(true);
                            return;
                        }

                        if(rows.length == 0){
                            res.json({ error: "User doesn't exist" });
                            callback(true);
                            return;
                        }

                        var user = rows[0];

                        var randomReward = getRandomRewards();
                        callback(null, dataRun, user);
                    });
                },
                function(dataRun, user, callback){
                    mysql.map.getCurrentMap(function (err, rows) {
                        if(err){
                            res.json({ error: "Error getting current map" });
                            callback(true);
                            return;
                        }

                        if(rows.length == 0){
                            res.json({ error: "No current map" });
                            callback(true);
                            return;
                        }

                        dataRun.ranked = 0;
                        if(rows[0].id_m == dataRun.id_m){
                            dataRun.ranked = 1;
                        }
                        callback(null, dataRun, user);
                    });
                },
                function(dataRun, user, callback){
                    mysql.run.getUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, function (err, rows) {
                        if(err){
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

                        if(rows.length == 0){
                            //NEW RUN
                            if(dataRun.ranked){
                                //Ranked
                                res.json({ time: dataRun.time, best: true});
                            }else{
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
                                    res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards});
                                });

                            }
                            mysql.run.addRun(dataRun);
                        }else{
                            //ANOTHER RUN
                            if(rows[0].time > dataRun.time){
                                //BEST TIME
                                if(dataRun.ranked){
                                    //Ranked
                                    res.json({ time: dataRun.time, best: true});
                                }else{
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
                                        res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards});
                                    });
}
                                //update time
                                mysql.run.updateUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, dataRun);
                            }else{
                                //no best time
                                res.json({ time: dataRun.time, best: false});
                            }
                        }
                    });
}
]);
}else{
    res.json({ error: "Inputs needed" });
}
});


try {
    var inputs = req.body.inputs.split("|");
    for (var i in inputs) {
        var inps = inputs[i].split(",");
        inputs[i] = {};
        for (var j in inps) {
            inputs[i][inps[j]] = true;
        }
    }
    mysql.map.getMap(req.params.map, function (err, rows) {
        if (err) {
            return;
        }

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
                mysql.user.getUserById(req.connected.id, function (err, rows) {
                    if (err) {
                        return;
                    }
                    if (rows.length == 0) {
                        return;
                    }

                    var user = rows[0];

                                //CHECK RANDOM REWARDS
                                var rreward = null;

                                var rrewardsweigths = {
                                    no: 700,
                                    rewarded: 100,
                                    golds: 100,
                                    xp: 100
                                };

                                var rrewards = null;
                                var rrewardsSum = 0;
                                for (var i in rrewardsweigths) {
                                    rrewardsSum += rrewardsweigths[i];
                                    rrewardsweigths[i] = rrewardsSum;
                                }

                                var rrewardsweigthsRandom = Math.floor(Math.random() * rrewardsSum + 1);

                                for (var i in rrewardsweigths) {
                                    if (rrewardsweigths[i] >= rrewardsweigthsRandom) {
                                        switch (i) {
                                            case "golds":
                                            var min = 50;
                                            var max = 100;
                                            var value = Math.floor(Math.random() * (max - min) + min);
                                            user.golds += value;
                                            rreward = { golds: value };
                                            break;
                                            case "xp":
                                            var min = 200;
                                            var max = 300;
                                            var value = Math.floor(Math.random() * (max - min) + min);
                                            user.xp += value;
                                            rreward = { xp: value };
                                            break;
                                        }
                                        break;
                                    }
                                }




                                mysql.map.getCurrentMap(function (err, row) {
                                    if (err) {
                                        return;
                                    }
                                    var ranked = 0;
                                    if (row[0].id_m == dataRun.id_m) {
                                        ranked = 1;
                                    }

                                    var medailsRewards = {
                                        0: {
                                            golds: 100,
                                            xp: 100,
                                        },
                                        1: {
                                            golds: 80,
                                            xp: 80,
                                        },
                                        2: {
                                            golds: 50,
                                            xp: 50,
                                        },
                                        3: {
                                            golds: 30,
                                            xp: 30,
                                        }
                                    };


                                    dataRun.ranked = ranked;

                                    mysql.run.getUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, function (err, rows) {
                                        if (err) {
                                            return;
                                        }
                                        if (rows.length > 0) {
                                            //Peut être new meilleur temps
                                            if (rows[0].time > dataRun.time) {
                                                if (!dataRun.ranked) {
                                                    //Non ranked => check des medailles
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
                                                        res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards, rreward: rreward });
                                                    });

} else {
                                                    //Ranked on save
                                                    res.json({ time: dataRun.time, best: true, rreward: rreward });
                                                }
                                                mysql.run.updateUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, dataRun);
                                            } else {
                                                res.json({ time: dataRun.time, best: false, rreward: rreward });
                                            }
                                        } else {
                                            //Nouveau temps
                                            if (!dataRun.ranked) {
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
                                                    res.json({ time: dataRun.time, best: true, medail: newMedail, rewards: rewards, rreward: rreward });
                                                });
} else {
    res.json({ time: dataRun.time, best: true, rreward: rreward });
}
mysql.run.addRun(dataRun);
}
});

});
});


} else {
    res.json({ error: "Error path" });
}
} else {
    res.json({ error: "Map doesn't exist" });
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

var getRandomRewards = function(user){
    var rreward = {};

    var rrewardsweigths = {
        no: 700,
        golds: 125,
        xp: 125,
        gems:50
    };

    var rrewardsSum = 0;
    for (var i in rrewardsweigths) {
        rrewardsSum += rrewardsweigths[i];
        rrewardsweigths[i] = rrewardsSum;
    }

    var rrewardsweigthsRandom = Math.floor(Math.random() * rrewardsSum + 1);

    rrewardsSum = 0;
    for (var i in rrewardsweigths) {
        rrewardsSum += rrewardsweigths[i];
        if (rrewardsSum >= rrewardsweigthsRandom) {
            switch (i) {
                case "golds":
                var min = 50;
                var max = 100;
                var value = Math.floor(Math.random() * (max - min + 1) + min);
                rreward = { golds: value };
                break;
                case "xp":
                var min = 200;
                var max = 300;
                var value = Math.floor(Math.random() * (max - min + 1) + min);
                rreward = { xp: value };
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