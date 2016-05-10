var CronJob = require('cron').CronJob;
var moment  = require('moment');

module.exports = function(app){

    var job = new CronJob({
        cronTime: '00 00 00,12 * * *',
        onTick: function() {
            console.log("OK");
        },
        start: false
    });
    job.start();

    return {
        getNextTime:function(){
            return moment(job.nextDate()._d).diff();
        }
    }
}