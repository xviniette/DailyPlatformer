module.exports = function(app, baseURL){
    var mysql = app.get("MysqlManager");

    app.get(baseURL+"/bests/:map/:ranked?/:limit?", function(req, res){
        console.log(req.params.map, req.params.ranked, req.params.limit);
        res.json(req.params);
    });
}