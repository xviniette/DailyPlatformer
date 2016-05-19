var mysql = require('mysql');

module.exports = function(app){
    var db;
    db = mysql.createConnection(app.get("config").mysql);

    db.connect(function(err){
        if(err) {
            console.log("Error connecting database \n\n");  
            process.exit();
        }else{
            console.log("Database : OK");
        }
    });

    return {
        getDB:function(){
            return db;
        },
        user:{
            getUserById:function(id){
                return new Promise(function(resolve, reject){
                   db.query("SELECT * FROM users WHERE id_u = ?;", [id], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            getUserByLogin:function(login){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM users WHERE login = ?;", [login], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            getUserAuthentification:function(login, password){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM users WHERE login = ? AND password = ?;", [login, password], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            getUserByToken:function(token){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM users WHERE token = ?;", [token], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            addUser:function(datas){
                return new Promise(function(resolve, reject){
                    db.query("INSERT INTO users SET ?", datas, function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            updateUser:function(datas, id){
                return new Promise(function(resolve, reject){
                    db.query("UPDATE users SET ? WHERE ?", [datas, {id_u:id}], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            }
        },
        map:{
            getCurrentMap:function(){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM maps ORDER BY id_m DESC LIMIT 0,1;", function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            getAllMaps:function(){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM maps;", function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            },
            getMap:function(id){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM maps WHERE id_m = ?;", [id], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            }
        },
        run:{
            getMapBestRuns:function(map, limit, ranked){
                if(ranked !== null){
                    return new Promise(function(resolve, reject){
                        db.query("SELECT r.*, u.login FROM runs r, users u WHERE id_m = ? AND ranked = ? AND r.id_u = u.id_u ORDER BY time ASC LIMIT 0,?;", [map, ranked, limit], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }else{
                    return new Promise(function(resolve, reject){
                        db.query("SELECT r.*, u.login FROM runs r, users u WHERE id_m = ? AND r.id_u = u.id_u ORDER BY time ASC LIMIT 0,?;", [map, limit], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }
            },
            getUserRuns:function(user, ranked){
                return new Promise(function(resolve, reject){
                        db.query("SELECT * FROM runs WHERE id_u = ? AND ranked = ?;", [user, ranked], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getUserMapRun:function(user, map, ranked){
                return new Promise(function(resolve, reject){
                        db.query("SELECT * FROM runs WHERE id_u = ? AND id_m = ? AND ranked = ?;", [user, map, ranked], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            updateUserMapRun:function(user, map, ranked, datas){
                return new Promise(function(resolve, reject){
                        db.query("UPDATE runs SET ? WHERE id_u = ? AND id_m = ? AND ranked = ?;", [datas, user, map, ranked], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            addRun:function(datas){
                return new Promise(function(resolve, reject){
                        db.query("INSERT INTO runs SET ?", datas, function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getNbRuns:function(map, ranked){
                if(ranked !== null){
                    return new Promise(function(resolve, reject){
                        db.query("SELECT COUNT(*) as nb FROM runs WHERE id_m = ? AND ranked = ?;", [map, ranked], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }else{
                    return new Promise(function(resolve, reject){
                        db.query("SELECT COUNT(*) as nb FROM runs WHERE id_m = ?", [map], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }
            },
            getUserRunPosition:function(user, map, ranked){

            },
            getFollowingRuns:function(user, map, ranked){
                if(ranked !== null){
                    return new Promise(function(resolve, reject){
                        db.query("SELECT r.*, u.login FROM runs r, followers f, users u WHERE f.follower = ? AND r.id_m = ? AND r.ranked = ? AND f.followed = r.id_u AND f.followed = u.id_u;", [user, map, ranked], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }else{
                    return new Promise(function(resolve, reject){
                         db.query("SELECT r.*, u.login FROM runs r, followers f, users u WHERE f.follower = ? AND r.id_m = ? AND f.followed = r.id_u AND f.followed = u.id_u;", [map, limit], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }
            },
            getOffsetRuns:function(map, offset){
                return new Promise(function(resolve, reject){
                         db.query("SELECT r.*, u.login FROM runs r, users u WHERE id_m = ? AND r.ranked = 1 AND r.id_u = u.id_u ORDER BY time ASC LIMIT 0,1 OFFSET ?;", [map, offset], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            }
        },
        skin:{
            getSkin:function(id){
                return new Promise(function(resolve, reject){
                         db.query("SELECT * FROM skins WHERE id_s = ?;", [id], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getUserSkin:function(user, skin){
                return new Promise(function(resolve, reject){
                         db.query("SELECT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = ? AND us.id_s = s.id;", [user, skin], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getUserSkins:function(user){
                return new Promise(function(resolve, reject){
                         db.query("SELECT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = s.id;", [id], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getAllSkins:function(){
                return new Promise(function(resolve, reject){
                         db.query("SELECT * FROM skins;", function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            addUserSkin:function(user, skin){
                return new Promise(function(resolve, reject){
                         db.query("INSERT INTO user_skin SET ?", {id_u:user, id_s:skin}, function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getNonUserSkins:function(user){

            }
        },
        follow:{
            getFollowsUser:function(id){
                return new Promise(function(resolve, reject){
                         db.query("SELECT u.id_u, u.login FROM followers f, user u WHERE f.id_follower = ? AND f.id_followed = u.id_u;", [id], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            getFollowersUser:function(id){
                return new Promise(function(resolve, reject){
                        db.query("SELECT u.id_u, u.login FROM followers f, user u WHERE f.id_followed = ? AND f.id_follower = u.id_u;", [id], function(err, rows){
                            if(err){
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
            },
            addFollow:function(follower, followed){
                return new Promise(function(resolve, reject){
                    db.query("SELECT * FROM followers WHERE id_follower = ? AND id_followed = ?;", [follower, followed], function(err, rows){
                        if(rows.length == 0){
                            db.query("INSERT INTO followers SET ?", {id_follower:follower, id_followed:followed});
                            resolve(rows);
                        }else{
                            reject();
                        }
                    });
                });
            },
            deleteFollow:function(follower, followed){
                return new Promise(function(resolve, reject){
                    db.query("DELETE FROM followers WHERE id_follower = ? AND id_followed = ?;", [follower, followed], function(err, rows){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(rows);
                    });
                });
            }
        }
    }
}