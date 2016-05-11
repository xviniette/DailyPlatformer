var jwt = require('jsonwebtoken');

module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.post("/register", function(req, res){

        if(req.connected){
            res.status(500).json({msg:"Already logged."});
            return;
        }

        //Verif presence login/password
        if(req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0){
            //verif login unique
            mysql.user.getUserByLogin(req.body.login, function(err, rows){
                //non present
                if(!err && rows.length == 0){
                    var user = {
                        login:req.body.login,
                        password:req.body.password
                    };

                    //Ajout
                    mysql.user.addUser(user, function(err, rows){
                        if(!err){
                            user.id = rows.insertId;
                            var token = jwt.sign(user, app.get('config').jwtKey);
                            mysql.user.updateUser({token:token}, user.id);
                            res.status(200).json({token:token});
                        }else{
                            res.status(500).json({msg:"Problem adding user."});
                        }
                    });
                }else{
                    res.status(500).json({msg:"Login already taken."});
                }
            });
        }else{
            res.status(500).json({msg:"Login or password are empty."});
        }
    });

    router.post("/login", function(req, res){

        if(req.connected){
            res.status(500).json({msg:"Already logged."});
            return;
        }

        if(req.body.login && req.body.password && req.body.login.length > 0 && req.body.password.length > 0){
            mysql.user.getUserAuthentification(req.body.login, req.body.password, function(err, r){
                if(r.length > 0){
                    res.status(200).json({token:r[0].token});
                }else{
                    res.status(500).json({msg:"Login and password don't match."});
                }
            });
        }else{
            res.status(500).json({msg:"Login or password are empty."});
        }
    });

    router.get("/profile/:login", function(req, res){
        mysql.user.getUserByLogin(req.params.login, function(err, rows){
            if(rows.length > 0){
                res.json(rows[0]);
            }else{
                res.json(null);
            }
        });
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