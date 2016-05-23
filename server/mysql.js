var mysql = require('mysql');

module.exports = function (app) {
    var db;
    db = mysql.createConnection(app.get("config").mysql);

    db.connect(function (err) {
        if (err) {
            console.log("Error connecting database \n\n");
            process.exit();
        } else {
            console.log("Database : OK");
        }
    });

    return {
        getDB: function () {
            return db;
        },
        user: {
            getUserById: function (id, callback) {
                db.query("SELECT * FROM users WHERE id_u = ?;", [id], callback);
            },
            getUserByLogin: function (login, callback) {
                db.query("SELECT * FROM users WHERE login = ?;", [login], callback);
            },
            getUserAuthentification: function (login, password, callback) {
                db.query("SELECT * FROM users WHERE login = ? AND password = ?;", [login, password], callback);
            },
            getUserByToken: function (token, callback) {
                db.query("SELECT * FROM users WHERE token = ?;", [token], callback);
            },
            addUser: function (datas, callback) {
                db.query("INSERT INTO users SET ?", datas, callback);
            },
            updateUser: function (datas, id, callback) {
                db.query("UPDATE users SET ? WHERE ?", [datas, { id_u: id }], callback);
            },
            getRanking: function (attribute, limit, offset, callback) {
                db.query("SELECT * FROM users ORDER BY ? DESC LIMIT ? OFFSET ?;", [attribute, limit, offset], callback);
            }
        },
        map: {
            getCurrentMap: function (callback) {
                db.query("SELECT * FROM maps ORDER BY id_m DESC LIMIT 0,1;", callback);
            },
            getAllMaps: function (callback) {
                db.query("SELECT * FROM maps;", callback);
            },
            getMap: function (id, callback) {
                db.query("SELECT * FROM maps WHERE id_m = ?;", [id], callback);
            }
        },
        run: {
            getMapBestRuns: function (map, limit, ranked, offset, callback) {
                if (ranked !== null) {
                    db.query("SELECT r.*, u.login FROM runs r, users u WHERE u.id_u = r.id_u AND r.id_m = ? AND r.ranked = ? ORDER BY time ASC LIMIT ? OFFSET ?;", [map, ranked, limit, offset], callback);
                } else {
                    db.query("SELECT r.*, u.login FROM runs r, users u WHERE id_m = ? AND r.id_u = u.id_u ORDER BY time ASC LIMIT ? OFFSET ?;", [map, limit, offset], callback);
                }
            },
            getUserRuns: function (user, ranked, callback) {
                db.query("SELECT * FROM runs WHERE id_u = ? AND ranked = ?;", [user, ranked], callback);
            },
            getUserMapRun: function (user, map, ranked, callback) {
                db.query("SELECT r.*, u.login FROM runs r, users u WHERE r.id_u = ? AND r.id_m = ? AND r.ranked = ? AND r.id_u = u.id_u;", [user, map, ranked], callback);
            },
            updateUserMapRun: function (user, map, ranked, datas, callback) {
                db.query("UPDATE runs SET ? WHERE id_u = ? AND id_m = ? AND ranked = ?;", [datas, user, map, ranked], callback);
            },
            addRun: function (datas, callback) {
                db.query("INSERT INTO runs SET ?", datas, callback);
            },
            getNbRuns: function (map, ranked, callback) {
                if (ranked !== null) {
                    db.query("SELECT COUNT(*) as nb FROM runs WHERE id_m = ? AND ranked = ?;", [map, ranked], callback);
                } else {
                    db.query("SELECT COUNT(*) as nb FROM runs WHERE id_m = ?", [map], callback);
                }
            },
            getUserRunPosition: function (user, map, ranked, callback) {

            },
            getFollowingRuns: function (user, map, ranked, callback) {
                if (ranked !== null) {
                    db.query("SELECT r.*, u.login FROM runs r, followers f, users u WHERE f.id_follower = ? AND r.id_m = ? AND r.ranked = ? AND f.id_followed = r.id_u AND f.id_followed = u.id_u;", [user, map, ranked], callback);
                } else {
                    db.query("SELECT r.*, u.login FROM runs r, followers f, users u WHERE f.follower = ? AND r.id_m = ? AND f.followed = r.id_u AND f.followed = u.id_u;", [user, map], callback);
                }
            },
            getOffsetRuns: function (map, offset, callback) {
                db.query("SELECT r.*, u.login FROM runs r, users u WHERE id_m = ? AND r.ranked = 1 AND r.id_u = u.id_u ORDER BY time ASC LIMIT 1 OFFSET ?;", [map, offset], callback);
            }
        },
        skin: {
            getSkin: function (id, callback) {
                db.query("SELECT * FROM skins WHERE id_s = ?;", [id], callback);
            },
            getUserSkin: function (user, skin, callback) {
                db.query("SELECT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = ? AND us.id_s = s.id;", [user, skin], callback);
            },
            getUserSkins: function (user, callback) {
                db.query("SELECT DISTINCT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = s.id;", [id], callback);
            },
            getAllSkins: function (callback) {
                db.query("SELECT * FROM skins;", callback);
            },
            addUserSkin: function (user, skin, callback) {
                db.query("INSERT INTO user_skin SET ?", { id_u: user, id_s: skin }, callback);
            },
            getNonUserSkins: function (user, callback) {
                db.query("SELECT * FROM skins s WHERE NOT EXISTS (SELECT * FROM user_skin us WHERE us.id_s = s.id_s AND us.id_u = ?) ORDER BY s.rarity;", [user], callback);
            }
        },
        follow: {
            getFollowsUser: function (id, callback) {
                db.query("SELECT u.id_u, u.login FROM followers f, user u WHERE f.id_follower = ? AND f.id_followed = u.id_u;", [id], callback);
            },
            getFollowersUser: function (id, callback) {
                db.query("SELECT u.id_u, u.login FROM followers f, user u WHERE f.id_followed = ? AND f.id_follower = u.id_u;", [id], callback);
            },
            addFollow: function (follower, followed, callback) {
                db.query("SELECT * FROM followers WHERE id_follower = ? AND id_followed = ?;", [follower, followed], function (err, rows) {
                    if (rows.length == 0) {
                        db.query("INSERT INTO followers SET ?", { id_follower: follower, id_followed: followed });
                        callback(false, rows);
                    } else {
                        callback(true);
                    }
                });
            },
            deleteFollow: function (follower, followed, callback) {
                db.query("DELETE FROM followers WHERE id_follower = ? AND id_followed = ?;", [follower, followed], callback);
            }
        }
    }
}