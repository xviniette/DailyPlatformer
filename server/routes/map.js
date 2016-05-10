module.exports = function(app, baseURL){
    var mysql = app.get("MysqlManager");

    app.get(baseURL+"/current", function(req, res){
        mysql.map.getCurrentMap(function(err, rows){
            if(err || rows.length == 0){
                res.json(null);
            }else{
                res.json(rows[0]);
            }
        });
    });

    app.get(baseURL+"/all", function(req, res){
        mysql.map.getAllMaps(function(err, rows){
            if(!err){
                res.json(rows);
            }
        });
    });

    app.get(baseURL+"/:id", function(req, res){
        mysql.map.getMap(req.params.id, function(err, rows){
            if(err || rows.length == 0){
                res.json(null);
            }else{
                res.json(rows[0]);
            }
        });
    });

}