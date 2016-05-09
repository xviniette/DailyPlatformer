var express         = require('express');
var CronJob         = require('cron').CronJob;
var moment          = require('moment');
var app             = express();
var MysqlManager    = require('./server/mysql.js')(app);
app.set("mysql", MysqlManager);
var routes          = require('./server/routes.js')(app);


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var job = new CronJob({
  cronTime: '00 00 00,12 * * *',
  onTick: function() {
    console.log("xD");
  },
  start: false
});
job.start();


//INTERVAL
var interval = moment(job.nextDate()._d).diff();
console.log("interval", interval);