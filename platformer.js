var express = require('express');
var app = express();
app.set("express", express);

var bodyParser = require('body-parser');

var config  = require('./server/config.js');
app.set("config", config);

var MysqlManager = require('./server/mysql.js')(app);
var CronManager = require('./server/CronManager.js')(app);

app.set("MysqlManager", MysqlManager);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

var routes = require('./server/routes.js')(app);

app.listen(3000);

process.on('uncaughtException', function (err) {
  console.log((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.log(err.stack)
  process.exit(1)
})


