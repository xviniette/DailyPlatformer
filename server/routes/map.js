module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.get("/current", function (req, res) {
        mysql.map.getCurrentMap(function (err, rows) {
            if (err) {
                res.json({ error: "Error getting map" });
                return;
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.json({ error: "No current map." });
            }
        })
    });

    router.get("/nextTime", function(req, res){
        res.json({timeleft:app.get("CronManager").getNextTime()});
    });

    router.get("/all", function (req, res) {
        mysql.map.getAllMaps(function (err, rows) {
            if (err) {
                res.json({ error: "Problem getting maps." });
                return;
            }
            res.json(rows);
        });
    });

    router.get("/:id", function (req, res) {
        mysql.map.getMap(req.params.id, function (err, rows) {
            if (err) {
                res.json({ error: "Error getting map" });
                return;
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.json({ error: "Map doesn't exist." });
            }
        });
    });

}