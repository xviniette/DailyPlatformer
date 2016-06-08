var async = require("async");

module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.get("/check", function(req, res){
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }

        //INFO USER : XP/ELO/GOLDS/GEMS
        //INFO RUN : X ranked, X total runs, X Médailles (master, gold, silver, bronze)
        //INFO SKin : X skin
        //INFO

        mysql.achievement.getNonUserAchievements(req.connected.id, function(err, rows){
            if(err){
                res.json({error:"Error getting achievements"});
                return;
            }
            var achievements = rows;

            async.parallel({
                user:function(callback){
                    mysql.user.getUserById(req.connected.id, function(err, rows){
                        if(err){
                            callback(err);
                            return;
                        }
                        if(rows.length == 0){
                            callback(true);
                            return;
                        }
                        var datas = {
                            xp:rows[0].xp,
                            elo:rows[0].elo,
                            golds:rows[0].golds,
                            gems:rows[0].gems
                        }

                        callback(null, datas);
                    });
                },
                skin:function(callback){
                    mysql.skin.getUserSkins(req.connected.id, function(err, rows){
                        if(err){
                            callback(err);
                            return;
                        }
                        var datas = {
                            total:rows.length
                        }

                        for(var i in rows){
                            var s = rows[i];
                            if(datas[s.rarity] == undefined){
                                datas[s.rarity] = 0;
                            }
                            datas[s.rarity]++;
                        }

                        callback(null, datas);
                    });
                },
                run:function(callback){
                    mysql.getDB().query("SELECT * FROM runs r, maps m WHERE r.id_u = ? AND r.id_m = m.id_m;", [req.connected.id], function(err, rows){
                        if(err){
                            callback(err);
                            return;
                        }

                        var datas = {
                            total:rows.length,
                            ranked:0,
                            unranked:0,
                            master:0,
                            gold:0,
                            silver:0,
                            bronze:0
                        };

                        for(var i in rows){
                            var r = rows[i];
                            if(r.ranked == 1){
                                datas.ranked++;
                            }else{
                                datas.unranked++;
                            }

                            if(r.ranked == 0){
                                if(r.time <= r.master){
                                    datas.master++;
                                }
                                if(r.time <= r.gold){
                                    datas.gold++;
                                }
                                if(r.time <= r.silver){
                                    datas.silver++;
                                }
                                if(r.time <= r.bronze){
                                    datas.bronze++;
                                }
                            }
                            
                        }
                        callback(null, datas);
                    });
}
}, function(err, results){
    res.json(results);

    for(var i in achievements){
        var ach = achievements[i];
    }
});



});


});

router.get("/all/:user?", function(req, res){
    if (req.params.user) {
        mysql.user.getUserByLogin(req.params.user, function(err, rows){
            if(err){
                res.json({error:"Error getting achievements"});
                return;
            }

            if(rows.length == 0){
                res.json({error:"User doesn't exist"});
                return;
            }

            var user = rows[0];

            mysql.achievement.getUserAchievements(user.id_u, function(err, rows){
                if(err){
                    res.json({error:"Error getting achievements"});
                    return;
                }
                res.json(rows);
            });

        });
    }else{
        mysql.achievement.getAchievements(function(err, rows){
            if(err){
                res.json({error:"Error getting achievements"});
                return;
            }
            res.json(rows);
        });
    }
});
}