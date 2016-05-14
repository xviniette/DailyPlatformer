var runValidator = require("../RunValidator.js");

module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.post("/upload/:map", function(req, res){
        if(!req.connected){
            res.status(401).json({error:"You must be logged in."});
            return;
        }

        if(req.body.inputs){
            try{
                var inputs = JSON.parse(req.body.inputs);

                mysql.map.getMap(req.params.map, function(err, rows){
                    if(!err && rows.length > 0){
                        runValidator.runIsValid(rows[0], inputs);
                    }
                });



            }catch(e){
                res.json({error:"Inputs problem"})
                return;
            }
            
        }else{
            res.json({error:""})
        }
    }); 

    router.get("/bests/:map/:ranked?/:limit?", function(req, res){
        console.log(req.params.map, req.params.ranked, req.params.limit);
        res.json(req.params);
    });
}