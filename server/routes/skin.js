module.exports = function(app, router){
    var mysql = app.get("MysqlManager");

    router.get("/all", function(req, res){

    });

    router.get("/all/:user", function(req, res){

    });

    router.get("/drop", function(req, res){
        var weights = {
            0:745,
            1:200,
            2:50,
            3:5
        };

    });

}