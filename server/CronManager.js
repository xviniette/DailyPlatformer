var CronJob = require('cron').CronJob;
var moment = require('moment');
var glicko2 = require('glicko2');

module.exports = function (app) {
    var mysql = app.get("MysqlManager");

    var endRankedCompute = function () {
        mysql.map.getCurrentMap(function (err, rows) {
            var ranking = new glicko2.Glicko2(app.get("config").glicko);

            if (err) {
                return;
            }

            if (rows.length > 0) {
                mysql.run.getAllRankedRuns(rows[0].id_m, function(err, rows){
                    var nb = rows.length - 1;

                    var racers = [];

                    for(var i in rows){
                        rows[i].golds += Math.round(((nb-i)/nb)*400 + 100);
                        rows[i].xp += Math.round(((nb-i)/nb)*400 + 100);

                        var p = ranking.makePlayer(rows[i].elo, rows[i].sigma, app.get("config").glicko.vol);
                        rows[i].glicko = p;
                        racers.push(p);
                    }

                    var race = glicko.makeRace(racers);
                    ranking.updateRatings(race);

                    for(var i in rows){
                        rows[i].elo = rows[i].glicko.getRating();
                        rows[i].sigma = rows[i].glicko.getRd();


                        mysql.user.updateUser({
                            golds:rows[i].golds,
                            xp:rows[i].xp,
                            elo:rows[i].elo,
                            sigma:rows[i].sigma
                        }, rows[i].id_u);
                    }
                });
            }
        });
}

var job = new CronJob({
    cronTime: '00 00 00,12 * * *',
    onTick: function() {
        console.log("OK CRON");
    },
    start: false
});
job.start();

return {
    getNextTime: function () {
        return moment(job.nextDate()._d).diff();
    }
}
}