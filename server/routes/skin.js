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
        mysql.user.getUserByLogin(req.params.user, function (err, rows) {
            if (err) {
                res.json({ error: "Can't get user skins" });
                return;
            }
            if (rows.length > 0) {
                mysql.skin.getUserSkins(rows[0].id_u, function (err, rows) {
                    if (err) {
                        res.json({ error: "Can't get user skins" });
                        return;
                    }
                    res.json(rows);
                });
            } else {
                res.json({ error: "User doesn't exist" });
            }
        });
    });

    router.post("/buy/:id", function (req, res) {
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }

        mysql.skin.getSkin(req.params.id, function (err, rows) {
            if (err) {
                res.json({ error: "Can't get skin" });
                return;
            }
            if (rows.length > 0) {
                var skin = rows[0];

                mysql.user.getUserById(req.connected.id, function (err, rows) {
                    if (err) {
                        res.json({ error: "Error getting user" });
                        return;
                    }
                    if (rows.length > 0) {

                        var user = rows[0];

                        if (user.gems >= skin.price) {
                            user.gems -= skin.price;
                        } else {
                            res.json({ error: "Not enough gems" });
                            return;
                        }
                        mysql.skin.getUserSkin(user.id_u, skin.id_s, function (err, rows) {
                            if (err) {
                                res.json({ error: "Server problem" });
                                return;
                            }
                            if (rows.length > 0) {
                                res.json({ error: "Already owned" });
                                return;
                            }

                            mysql.skin.addUserSkin(user.id_u, skin.id_s, function (err, rows) {
                                if (!err) {
                                    mysql.user.updateUser({ gems: user.gems }, user.id_u);
                                    res.json({ msg: "Skin bought" });
                                } else {
                                    res.json({ error: "Error buying skin" });
                                }
                            });
                            
                        });
                    } else {
                        res.json({ error: "User doesn't exist" });
                    }
                });

            } else {
                res.json({ error: "Skin doesn't exist" });
            }
        });
    });

    router.post("/drop", function (req, res) {
        if (!req.connected) {
            res.status(401).json({
                error: "You must be logged in"
            });
            return;
        }

        var price = 100;

        var weights = {
            0: 745,
            1: 200,
            2: 50,
            3: 5
        };

        mysql.user.getUserById(req.connected.id, function (err, rows) {
            if (err) {
                res.json({ error: "Error getting user" });
                return;
            }
            if (rows.length > 0) {

                var user = rows[0];

                if (user.golds >= price) {
                    user.golds -= price;
                } else {
                    res.json({ error: "Not enough golds" });
                    return;
                }

                mysql.skin.getNonUserSkins(user.id_u, function (err, rows) {
                    if (err) {
                        res.json({ error: "Problem getting skins" });
                        return;
                    }

                    var skins = rows;

                    if (skins.length == 0) {
                        res.json({ error: "You have all skins" });
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


                    mysql.skin.addUserSkin(user.id_u, skin.id_s, function (err, rows) {
                        if (!err) {
                            mysql.user.updateUser({ golds: user.golds }, user.id_u);
                            res.json(skin);
                        } else {
                            res.json({ error: "Error adding skin" });
                        }
                    });
                });
            } else {
                res.json({ error: "User doesn't exist" });
            }
        });
    });


    router.get("/generate", function (req, res) {
        var rarity = {
            0: 50,
            1: 30,
            2: 30,
            3: 30
        };

        for (var i in rarity) {
            for (var j = 0; j < rarity[i]; j++) {
                mysql.skin.addSkin({ title: (i + "-" + j), rarity: i, price: 100 });
            }
        }
        res.json({ lol: 'lol' });
    });

}