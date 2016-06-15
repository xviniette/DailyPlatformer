var async = require("async");

module.exports = function (app, router) {
    var mysql = app.get("MysqlManager");

    router.get("/all", function (req, res) {
        mysql.skin.getAllSkins(function (err, rows) {
            if (err) {
                res.json({ error: "Can't get skins" });
                return;
            }
            res.json(rows);
        });
    });

    router.get("/get/:id", function (req, res) {
        mysql.skin.getSkin(req.params.id, function (err, rows) {
            if (err) {
                res.json({ error: "Can't get skin" });
                return;
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.json({ error: "Skin doesn't exist" });
            }
        });
    });

    router.get("/all/:user", function (req, res) {
        async.waterfall([
            function (callback) {
                mysql.user.getUserByLogin(req.params.user, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get user skins" });
                        callback(err);
                        return;
                    }
                    if (rows.length > 0) {
                        callback(null, rows[0]);
                    } else {
                        res.json({ error: "User doesn't exist" });
                        callback(true);
                    }
                });
            },
            function (row, callback) {
                mysql.skin.getUserSkins(row.id_u, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get user skins" });
                        callback(err);
                        return;
                    }
                    res.json(rows);
                    callback(null);
                });
            }
        ]);
    });

    router.get("/notall/:user", function (req, res) {
        async.waterfall([
            function (callback) {
                mysql.user.getUserByLogin(req.params.user, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get user skins" });
                        callback(err);
                        return;
                    }
                    if (rows.length > 0) {
                        callback(null, rows[0]);
                    } else {
                        res.json({ error: "User doesn't exist" });
                        callback(true);
                    }
                });
            },
            function (row, callback) {
                mysql.skin.getNonUserSkins(row.id_u, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get user skins" });
                        callback(err);
                        return;
                    }
                    res.json(rows);
                    callback(null);
                });
            }
        ]);
    });

    router.post("/buy/:id", function (req, res) {
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }

        async.waterfall([
            function (callback) {
                //get skin
                mysql.skin.getSkin(req.params.id, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get skin" });
                        callback(err);
                        return;
                    }
                    if (rows.length > 0) {
                        var skin = rows[0];
                        callback(null, skin);
                    } else {
                        res.json({ error: "Skin doesn't exist" });
                        callback(true);
                    }
                });
            },
            function (skin, callback) {
                //get user
                mysql.user.getUserById(req.connected.id, function (err, rows) {
                    if (err) {
                        res.json({ error: "Error getting user" });
                        callback(err);
                        return;
                    }

                    if (rows.length > 0) {
                        var user = rows[0];

                        if (user.gems >= skin.price) {
                            user.gems -= skin.price;
                        } else {
                            res.json({ error: "Not enough gems" });
                            callback(true);
                            return;
                        }

                        callback(null, user, skin);

                    } else {
                        res.json({ error: "User doesn't exist" });
                        callback(true);
                    }

                });
            },
            function (user, skin, callback) {
                //Get User skin
                mysql.skin.getUserSkin(user.id_u, skin.id_s, function (err, rows) {
                    if (err) {
                        res.json({ error: "Server problem" });
                        callback(err);
                        return;
                    }
                    if (rows.length > 0) {
                        res.json({ error: "Already owned" });
                        callback(true);
                        return;
                    }

                    callback(null, user, skin);
                });
            },
            function (user, skin, callback) {
                //Add User skin
                mysql.skin.addUserSkin(user.id_u, skin.id_s, function (err, rows) {
                    if (!err) {
                        mysql.user.updateUser({ gems: user.gems }, user.id_u);
                        res.json({ msg: "Skin bought" });
                        callback(null, true);
                    } else {
                        res.json({ error: "Error buying skin" });
                        callback(err);
                    }
                });
            }
        ]);
    });

    router.post("/drop", function (req, res) {
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }

        var type = "golds";
        if (req.body.gems) {
            type = "gems";
        }

        var price = {
            golds: 100,
            gems: 10
        }

        var weights = {
            0: 745,
            1: 200,
            2: 50,
            3: 5
        };

        async.waterfall([
            function (callback) {
                mysql.user.getUserById(req.connected.id, function (err, rows) {
                    if (err) {
                        res.json({ error: "Error getting user" });
                        callback(err);
                        return;
                    }

                    if (rows.length > 0) {

                        var user = rows[0];

                        if (user[type] >= price[type]) {
                            user[type] -= price[type];
                        } else {
                            res.json({ error: "Not enough "+type });
                            callback(true);
                            return;
                        }

                        callback(null, user);

                    } else {
                        res.json({ error: "User doesn't exist" });
                        callback(true);
                    }

                });
            },
            function (user, callback) {
                mysql.skin.getAllSkins(function (err, rows) {
                    if (err) {
                        res.json({ error: "Problem getting skins" });
                        callback(err);
                        return;
                    }

                    var skins = rows;

                    if (skins.length == 0) {
                        res.json({ error: "No skins" });
                        return;
                    }

                    var SkinsByRarity = {};

                    for (var i in skins) {
                        if (!SkinsByRarity[skins[i].rarity]) {
                            SkinsByRarity[skins[i].rarity] = [];
                        }
                        SkinsByRarity[skins[i].rarity].push(skins[i]);
                    }

                    var computedWeights = {};
                    var sum = 0;
                    for (var i in weights) {
                        if (SkinsByRarity[i] && SkinsByRarity[i].length > 0) {
                            sum += weights[i];
                            computedWeights[i] = sum;
                        }
                    }

                    var random = Math.floor(Math.random() * sum + 1);
                    var rarity = 0;
                    for (var i in computedWeights) {
                        if (computedWeights[i] >= random) {
                            rarity = i;
                            break;
                        }
                    }

                    var skin = SkinsByRarity[rarity][Math.floor(Math.random() * SkinsByRarity[rarity].length)];
                    callback(null, user, skin);
                });
            },
            function (user, skin, callback) {
                mysql.skin.getUserSkin(user.id_u, skin.id_s, function (err, rows) {
                    if (err) {
                        res.json({ error: "Problem" });
                        return;
                    }

                    if (rows.length == 0) {
                        callback(null, user, skin);
                    } else {
                        var goldsDuplicate = 200;
                        user.golds += goldsDuplicate;
                        mysql.user.updateUser({ golds: user.golds }, user.id_u);
                        res.json({ skin: skin, duplicate: true, golds: goldsDuplicate });
                        callback(true);
                    }
                });
            },
            function (user, skin, callback) {
                mysql.skin.addUserSkin(user.id_u, skin.id_s, function (err, rows) {
                    if (!err) {
                        mysql.user.updateUser({ golds: user.golds, gems: user.gems }, user.id_u);
                        res.json({ skin: skin });
                        callback(null, true);
                    } else {
                        res.json({ error: "Error adding skin" });
                        callback(err);
                    }
                });
            }
        ]);
    });


}