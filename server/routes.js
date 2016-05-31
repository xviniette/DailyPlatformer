var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function(app){
    var mysql = app.get("MysqlManager");

    app.use(function(req, res, next){
        var token = req.body.token || req.query.token || req.headers['authorization'];
        if(token){
            jwt.verify(token, app.get('config').jwtKey, function(err, decoded) { 
                if(!err){
                    mysql.user.getUserByToken(token, function(err, rows){
                        if(err || rows.length == 0){
                            res.status(401).json({error:"Authentication token error."});
                        }else{
                            req.connected = decoded;
                            req.connected.token = token;
                            req.connected.user = rows[0];
                            console.log(req.connected);
                            next();
                        }
                    });
                    
                }else{
                    res.status(401).json({error:"Authentication token error."});
                }   
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

        //404
        app.all("*", function(req, res){
            res.status(404).json({msg:'404: Page not Found'});
        });
    });
}