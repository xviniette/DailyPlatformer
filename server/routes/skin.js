module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.get("/all", function (req, res) {

    });

    router.get("/all/:user", function (req, res) {

    });

    router.get("/drop", function (req, res) {
        var weights = {
            0: 745,
            1: 200,
            2: 50,
            3: 5
        };

        var computedWeights = {};
        var sum = 0;
        for(var i in weights){
            sum += weights[i];
            computedWeights[i] = sum;
        }

        var random = Math.floor(Math.random() * sum + 1);
        var rarity = 0;
        for(var i in computedWeights){
            if(computedWeights[i] >= random){
                rarity = i;
                break;
            }
        }

        res.json({drop:rarity});

    });

}