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
                        var valid = runValidator.runIsValid(rows[0], inputs);
                        if(valid !== false){
                            var dataRun = {
                                id_m:rows[0].id_m,
                                id_u:req.connected.id,
                                time:valid.time,
                                positions:JSON.stringify(valid.positions),
                                ranked:true
                            }

                            mysql.map.getCurrentMap(function(err, row){
                                var ranked = 0;
                                if(row[0].id_m == dataRun.id_m){
                                    ranked = 1;
                                }

                                dataRun.ranked = ranked;

                                mysql.run.getUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, function(err, rows){
                                    if(rows.length > 0){
                                        if(rows[0].time > dataRun.time){
                                            console.log("xD");
                                            mysql.run.updateUserMapRun(dataRun.id_u, dataRun.id_m, dataRun.ranked, dataRun, function(err, rows){
                                                console.log(err);

                                            });
                                        }
                                    }else{
                                        mysql.run.addRun(dataRun, function(err, rows){});
                                    }
                                });
                            });
                            res.json({time:dataRun.time});
                        }else{
                            res.json({error:"Probleme run"});
                        }
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

    router.get("/best/:map/:ranked?/:limit?", function(req, res){
        var limit = 10;
        if(req.params.limit){
            limit = parseInt(req.params.limit);
        }

        var ranked = null;
        if(req.params.ranked){
            ranked = (req.params.ranked == 1) ? 1 : 0;
        }

        mysql.run.getMapBestRuns(req.params.map, limit, ranked, function(err, rows){
            if(err){
                res.json({error:"Error ghosts"});
                return;
            }
            res.json(rows);
        });
    });

    router.get("player/:user/:ranked/:id", function(req, res){

    });
}