var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function(app){

    app.use(function(req, res, next){
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(token){
            jwt.verify(token, app.get('config').jwtKey, function(err, decoded) { 
                if(!err){
                    req.connected = decoded;
                }
                next();
            });
        }else{
            next();
        }
    });

    var routeDir = __dirname + "/routes/";

    fs.readdir(routeDir, function(err, files){
        if(!err){
            for(var i in files){
                require(routeDir + files[i])(app, "/"+files[i].split(".")[0]);
            }
        }
    });
}