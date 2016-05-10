module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.get("/bests/:map/:ranked?/:limit?", function(req, res){
        console.log(req.params.map, req.params.ranked, req.params.limit);
        res.json(req.params);
    });
}