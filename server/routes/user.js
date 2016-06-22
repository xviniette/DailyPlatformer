var jwt = require('jsonwebtoken');
var async = require("async");

module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.post("/register", function (req, res) {

        if (req.connected) {
            res.json({ error: "Already logged." });
            return;
        }
        if (req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0) {

            async.waterfall([
                function(callback){
                    mysql.user.getUserByLogin(req.body.login, function (err, rows) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        if (rows.length == 0) {
                            var userToSave = {
                                login: req.body.login,
                                password: req.body.password,
                                elo:app.get("config").glicko.rating,
                                sigma:app.get("config").glicko.rd,
                                xp:0,
                                golds:0,
                                gems:0
                            }
                            callback(null, userToSave);
                        }else{
                            res.json({ error: "Login already taken." });
                            callback(true);
                        }
                    });
                },
                function(userToSave, callback){
                    mysql.user.addUser(userToSave, function (err, rows) {
                        if (err) {
                            res.json({ error: "Problem adding user." });
                            callback(err);
                            return;
                        }
                        var user = {
                            id:rows.insertId,
                            login: req.body.login,
                            password: req.body.password
                        };

                        var token = jwt.sign(user, app.get('config').jwtKey);
                        mysql.user.updateUser({ token: token }, user.id);
                        res.json({ token: token });
                        callback(null);
                    });
                }
                ]);
        } else {
            res.json({ error: "Login or password are empty." });
        }
    });

    router.post("/login", function (req, res) {

        if (req.connected) {
            res.json({ error: "Already logged." });
            return;
        }

        if (req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0) {
            mysql.user.getUserAuthentification(req.body.login, req.body.password, function (err, rows) {
                if (err) {
                    res.json({ error: "Can't get informations" })
                    return;
                }

                if (rows.length > 0) {
                    res.json({ token: rows[0].token });
                } else {
                    res.json({ error: "Login and password don't match." });
                }
            });
        } else {
            res.json({ error: "Login or password are empty." });
        }
    });

    router.get("/profile/:login?", function (req, res) {
        if (!req.params.login) {
            if (req.connected) {
                mysql.user.getUserById(req.connected.id, function (err, rows) {
                    if (err) {
                        return;
                    }
                    res.json(rows[0]);
                });
            } else {
                res.json({ error: "Non-existing user." });
            }
        } else {
            mysql.user.getUserByLogin(req.params.login, function (err, rows) {
                if (err) {
                    return;
                }
                if (rows.length > 0) {
                    res.json(rows[0]);
                } else {
                    res.json({ error: "Non-existing user." });
                }
            });

        }
    });

    router.get("/followers/:user?", function(req, res){
        async.waterfall([
            function(callback){
                if(req.params.user){
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

                        callback(null, rows[0].id_u);
                    });
                }else{
                    if(req.connected){
                        callback(null, req.connected.id);
                    }else{
                        res.json({error:"Choose a player"});
                        callback(true);
                    }
                }
            },
            function(userId, callback){
                mysql.follow.getFollowersUser(userId, function(err, rows){
                    if(err){
                        console.log(err);
                        res.json({error:"Can't get followers"});
                        callback(err);
                        return;
                    }
                    res.json(rows);
                    callback(null);
                });
            }
            ]);
    });

    router.get("/followeds/:user?", function(req, res){
        async.waterfall([
            function(callback){
                if(req.params.user){
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

                        callback(null, rows[0].id_u);
                    });
                }else{
                    if(req.connected){
                        callback(null, req.connected.id);
                    }else{
                        res.json({error:"Choose a player"});
                        callback(true);
                    }
                }
            },
            function(userId, callback){
                mysql.follow.getFollowsUser(userId, function(err, rows){
                    if(err){
                        console.log(err);
                        res.json({error:"Can't get followers"});
                        callback(err);
                        return;
                    }
                    res.json(rows);
                    callback(null);
                });
            }
            ]);
    });

    router.post("/follow/:user", function (req, res) {
        if (!req.connected) {
            res.status(401).json({ error: "You must be logged in" });
            return;
        }
        mysql.user.getUserByLogin(req.params.user, function (err, rows) {
            if (err) {
                return;
            }
            if (rows.length > 0) {
                if (req.connected.id != rows[0].id_u) {
                    mysql.follow.addFollow(req.connected.id, rows[0].id_u, function (err, rows) {
                        if (err) {
                            res.json({ error: "Already following" });
                            return;
                        }
                        res.json({ msg: "Player followed" });
                    });
                } else {
                    res.json({ msg: "You can't follow yourself" });
                }
            } else {
                res.json({ error: "Player not exist" });
            }
        });
    });

    router.post("/unfollow/:user", function (req, res) {
        if (!req.connected) {
            res.status(401).json({ error: "You must be logged in" });
            return;
        }
        mysql.user.getUserByLogin(req.params.user, function (err, rows) {
            if (rows.length > 0) {
                mysql.follow.deleteFollow(req.connected.id, rows[0].id_u, function (err, rows) {
                    if (err) {
                        res.json({ msg: "Error unfollowing" });
                        return;
                    }
                    res.json({ msg: "Player unfollowed" });
                });
            } else {
                res.json({ error: "Player not exist" });
            }
        })
    });

    router.get("/ranking/:attribute?/:limit?/:offset?", function (req, res) {
        var attribute = "elo";
        if (req.params.attribute && req.params.attribute == "xp") {
            attribute = "xp";
        }

        var limit = 100;
        if (req.params.limit) {
            limit = parseInt(req.params.limit);
        }

        var offset = 0;
        if (req.params.offset) {
            offset = parseInt(req.params.offset);
        }

        mysql.user.getRanking(attribute, limit, offset, function (err, rows) {
            if (err) {
                res.json({ error: "Error getting ranking" });
                return;
            }
            res.json(rows);

        });
    });

    router.get("/autocomplete/:begin", function(req, res){
        mysql.user.autocomplete(req.params.begin, function (err, rows) {
            if (err) {
                res.json({ error: "Error getting autocomplete" });
                return;
            }
            res.json(rows);
        });
    });
}