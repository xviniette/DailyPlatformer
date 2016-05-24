var CronJob = require('cron').CronJob;
var moment = require('moment');
var trueskill = require("trueskill");

module.exports = function (app) {

    var mysql = app.get("MysqlManager");

    var endRankedCompute = function () {
        mysql.map.getCurrentMap(function (err, rows) {
            if (err) {
                return;
            }
            if (rows.length > 0) {
                mysql.run.getAllRankedRuns(rows[0].id_m, function(err, rows){
                    var nb = rows.length - 1;

                    for(var i in rows){
                        rows[i].golds += Math.round(((nb-i)/nb)*400 + 100);
                        rows[i].xp += Math.round(((nb-i)/nb)*400 + 100);


                        rows[i].skill = [rows[i].elo, rows[i].sigma];
                        rows[i].rank = parseInt(i)+1;
                    }

                    trueskill.AdjustPlayers(rows);

                    for(var i in rows){
                        rows[i].elo = Math.round(rows[i].skill[0]);
                        rows[i].sigma = Math.round(rows[i].skill[1]);

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
        cronTime: '00 30 * * * *',
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