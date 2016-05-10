var jwt = require('jsonwebtoken');

module.exports = function(app, baseURL){
    var mysql = app.get("MysqlManager");

    app.get(baseURL+"/register/:login/:password", function(req, res){
        console.log(req.params);
        if(req.params.login && req.params.password){
           
        }
    });

    app.get(baseURL+"/login/:login/:password", function(req, res){
        console.log(req.params);
        if(req.params.login && req.params.password){
            mysql.user.addUser({
                login:req.params.login,
                password:req.params.password
            }, function(err, r){
                res.json({lol:"lol"});
            });
        }
    });
}