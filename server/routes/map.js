module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.get("/current", function(req, res){
        mysql.map.getCurrentMap()
        .then(function(rows){
            if(rows.length > 0){
                res.json(rows[0]);
            }else{
                res.json({error:"No current map."});
            }
        })
        .catch(function(err){
            res.json({error:"Error getting map"});
        });
    });

    router.get("/all", function(req, res){
        mysql.map.getAllMaps()
        .then(function(rows){
            res.json(rows);
        })
        .catch(function(err){
            res.json({error:"Problem getting maps."});
        });
    });

    router.get("/:id", function(req, res){
        mysql.map.getMap(req.params.id)
        .then(function(rows){
            if(rows.length > 0){
                res.json(rows[0]);
            }else{
                res.json({error:"Map doesn't exist."});
            }
        })
        .catch(function(err){
            res.json({error:"Error getting map"});
        });
    });

}