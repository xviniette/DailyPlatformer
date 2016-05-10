var express         = require('express');
var app             = express();

var MysqlManager    = require('./server/mysql.js')(app);
app.set("mysql", MysqlManager);


var routes          = require('./server/routes.js')(app);
var CronManager     = require('./server/CronManager.js')(app);




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


