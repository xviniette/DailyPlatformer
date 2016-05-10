module.exports = function(app){

    app.get("/currentLevel", function(req, res){
        res.send("oui");
    });

    app.get('/', function (req, res) {
      res.send('Hello World!');
  });

}