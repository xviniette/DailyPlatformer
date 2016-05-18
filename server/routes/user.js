var jwt = require('jsonwebtoken');

module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.post("/register", function(req, res){

        if(req.connected){
            res.json({error:"Already logged."});
            return;
        }

        if(req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0){
            mysql.user.getUserByLogin(req.body.login, function(err, rows){
                if(!err && rows.length == 0){
                    var user = {
                        login:req.body.login,
                        password:req.body.password
                    };

                    mysql.user.addUser(user, function(err, rows){
                        if(!err){
                            user.id = rows.insertId;
                            var token = jwt.sign(user, app.get('config').jwtKey);
                            mysql.user.updateUser({token:token}, user.id);
                            res.json({token:token});
                        }else{
                            res.json({error:"Problem adding user."});
                        }
                    });
                }else{
                    res.json({error:"Login already taken."});
                }
            });
        }else{
            res.json({error:"Login or password are empty."});
        }
    });

    router.post("/login", function(req, res){

        if(req.connected){
            res.json({error:"Already logged."});
            return;
        }

        if(req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0){
            mysql.user.getUserAuthentification(req.body.login, req.body.password, function(err, r){
                if(r.length > 0){
                    res.json({token:r[0].token});
                }else{
                    res.json({error:"Login and password don't match."});
                }
            });
        }else{
            res.json({error:"Login or password are empty."});
        }
    });

    router.get("/profile/:login?", function(req, res){
        if(!req.params.login){
            if(req.connected){
                mysql.user.getUserById(req.connected.id, function(err, rows){
                    res.json(rows[0]);
                });
            }else{
                res.json({error:"Non-existing user."});
            }
        }else{
            mysql.user.getUserByLogin(req.params.login, function(err, rows){
                if(rows.length > 0){
                    res.json(rows[0]);
                }else{
                    res.json({error:"Non-existing user."});
                }
            });
        }
    });

    router.get("/follow/:user", function(req, res){
        if(req.connected){
            mysql.user.getUserByLogin(req.params.user, function(err, rows){
                if(!err && rows.length > 0){
                    if(req.connected.id != rows[0].id_u){
                        mysql.follow.addFollow(req.connected.id, rows[0].id_u, function(err, rows){
                            if(err){
                                res.json({error:"Already following"});
                            }else{
                                res.json({msg:"Player followed"});
                            }
                        });
                    }else{
                        res.json({msg:"You can't follow yourself"});
                    }
                }else{
                    res.json({error:"Player not exist"});
                }
            });
        }else{
            res.status(401).json({
                error: "You must be logged in"
            });
        }
    });

    router.get("/unfollow/:user", function(req, res){
        if(req.connected){
            mysql.user.getUserByLogin(req.params.user, function(err, rows){
                if(!err && rows.length > 0){
                    mysql.follow.deleteFollow(req.connected.id, rows[0].id_u, function(err, rows){
                        res.json({msg:"Player unfollowed"});
                    });
                }else{
                    res.json({error:"Player not exist"});
                }
            });
        }else{
            res.status(401).json({
                error: "You must be logged in"
            });
        }
    });
}