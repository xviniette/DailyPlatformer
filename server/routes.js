var fs = require("fs");

module.exports = function(app){
    app.use(function(req, res, next){
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if(token){

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