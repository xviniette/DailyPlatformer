module.exports = function(app){

    app.use(function(req, res, next){
        console.log("logged");
        next();
    });

    app.get("/currentLevel", function(req, res){
        res.send("oui");
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/', 'index.html'));
    });

}