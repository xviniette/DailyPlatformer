module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.get("/current", function(req, res){
        mysql.map.getCurrentMap(function(err, rows){
            if(err || rows.length == 0){
                res.json({error:"No current map."});
            }else{
                res.json(rows[0]);
            }
        });
    });

    router.get("/all", function(req, res){
        mysql.map.getAllMaps(function(err, rows){
            if(!err){
                res.json(rows);
            }else{
                res.json({error:"Problem getting maps."});
            }
        });
    });

    router.get("/:id", function(req, res){
        mysql.map.getMap(req.params.id, function(err, rows){
            if(err || rows.length == 0){
                res.json({error:"Map doesn't exist."});
            }else{
                res.json(rows[0]);
            }
        });
    });

}