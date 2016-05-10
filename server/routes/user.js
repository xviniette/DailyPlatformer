var jwt = require('jsonwebtoken');

module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.post("/register", function(req, res){
        if(req.body.login && req.body.password){
            mysql.user.addUser({
                login:req.body.login,
                password:req.body.password
            }, function(err, rows){
                if(!err){
                    var id = rows.insertId;
                    var user = {
                        id:id,
                        login:req.body.login,
                        password:req.body.password
                    }
                    var token = jwt.sign(user, app.get('config').jwtKey);
                    mysql.user.updateUser({token:token}, id);
                    res.json({token:token});
                }
            });
        }
    });

    router.post("/login", function(req, res){
        if(req.body.login && req.body.password){
            mysql.user.getUserAuthentification(req.body.login, req.body.password, function(err, r){
                if(r.length > 0){
                    res.json({token:r[0].token});
                }
            });
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