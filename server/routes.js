var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function(app){

    app.use(function(req, res, next){
        var token = req.body.token || req.query.token || req.headers['authorization'];
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


    var express = app.get("express");
    var routeDir = __dirname + "/routes/";

    fs.readdir(routeDir, function(err, files){
        if(!err){
            for(var i in files){
                var router = express.Router();
                app.use("/"+files[i].split(".")[0], router);
                require(routeDir + files[i])(app, router);
            }
        }
    });
}