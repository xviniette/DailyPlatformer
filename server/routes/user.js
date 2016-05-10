var jwt = require('jsonwebtoken');

module.exports = function(app, baseURL){
    var mysql = app.get("MysqlManager");

    app.get(baseURL+"/register/:login/:password", function(req, res){
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

    app.get(baseURL+"/login/:login/:password", function(req, res){
        if(req.params.login && req.params.password){
            mysql.user.getUserAuthentification(req.params.login, req.params.password, function(err, r){
                if(r.length > 0){
                    res.json({token:r[0].token});
                }
            });
        }
    });

    app.get(baseURL+"/profile/:login", function(req, res){
        mysql.user.getUserByLogin(req.params.login, function(err, rows){
            if(rows.length > 0){
                res.json(rows[0]);
            }else{
                res.json(null);
            }
        });
    });
}