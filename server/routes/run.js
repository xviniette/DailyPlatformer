module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.post("/upload/:map", function(req, res){
        if(!req.connected){
            res.status(401).json({error:"You must be logged in."});
            return;
        }

        if(req.body.inputs){

        }else{
            res.json({error:""})
        }
    }); 

    router.get("/bests/:map/:ranked?/:limit?", function(req, res){
        console.log(req.params.map, req.params.ranked, req.params.limit);



        res.json(req.params);
    });
}