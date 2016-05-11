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

    router.get("/ranking", function(req, res){
        mysql.user.getUserByLogin(req.params.login, function(err, rows){
            if(rows.length > 0){
                res.json(rows[0]);
            }else{
                res.json(null);
            }
        });
    });
}