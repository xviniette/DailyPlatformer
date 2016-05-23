var CronJob = require('cron').CronJob;
var moment = require('moment');

module.exports = function (app) {

    var mysql = app.get("MysqlManager");

    var endRankedCompute = function () {
        mysql.map.getCurrentMap(function (err, rows) {
            if (err) {
                return;
            }
            if (rows.length > 0) {
                mysql.run.getAllRankedRuns(rows[0].id_m, function(err, rows){
                    console.log(rows); 
                    
                    
                });
            }
        });
    }
    
    setTimeout(function(){
        endRankedCompute();
    }, 0);

    var job = new CronJob({
        cronTime: '00 00 00,12 * * *',
        onTick: function() {
            console.log("OK");
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