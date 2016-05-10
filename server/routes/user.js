var jwt = require('jsonwebtoken');

module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.get("/register/:login/:password", function(req, res){
        console.log(req.params);
        if(req.params.login && req.params.password){
            mysql.user.addUser({
                login:req.params.login,
                password:req.params.password
            }, function(err, rows){
                if(!err){
                    var id = rows.insertId;
                    var user = {
                        id:id,
                        login:req.params.login,
                        password:req.params.password
                    }
                    var token = jwt.sign(user, app.get('config').jwtKey);
                    mysql.user.updateUser({token:token}, id);
                    res.json({token:token});
                }
            });
        }
    });

    router.get("/login/:login/:password", function(req, res){
        if(req.params.login && req.params.password){
            mysql.user.getUserAuthentification(req.params.login, req.params.password, function(err, r){
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
}