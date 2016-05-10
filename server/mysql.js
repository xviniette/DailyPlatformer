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
            getUserById:function(id, callback){
                db.query("SELECT * FROM users WHERE id_u = ?;", [id], callback);
            },
            getUserByLogin:function(login, callback){
                db.query("SELECT * FROM users WHERE login = ?;", [login], callback);
            },
            getUserAuthentification:function(login, password, callback){
                db.query("SELECT * FROM users WHERE login = ? AND password = ?;", [login, password], callback);
            },
            getUserByToken:function(token, callback){
                db.query("SELECT * FROM users WHERE token = ?;", [token], callback);
            },
            addUser:function(datas, callback){
                db.query("INSERT INTO users SET ?", datas, callback);
            },
            updateUser:function(datas, id, callback){
                db.query("UPDATE users SET ? WHERE ?", [datas, {id_u:id}], callback);
            }
        },
        map:{
            getCurrentMap:function(callback){
                db.query("SELECT * FROM maps ORDER BY id_m DESC LIMIT 0,1;", callback);
            },
            getAllMaps:function(callback){
                db.query("SELECT * FROM maps;", callback);
            },
            getMap:function(id, callback){
                db.query("SELECT * FROM maps WHERE id_m = ?;", [id], callback);
            }
        },
        runs:{
            getMapBestRuns:function(map, limit, ranked, callback){
                if(ranked !== null){
                    db.query("SELECT * FROM runs WHERE id_m = ? AND ranked = ? ORDER BY time ASC LIMIT 0,?;", [map, ranked, limit], callback);
                }else{
                    db.query("SELECT * FROM runs WHERE id_m = ? ORDER BY time ASC LIMIT 0,?;", [map, limit], callback);
                }
            },
            getUserRuns:function(user, callback){
                db.query("SELECT * FROM runs WHERE id_u = ?;", [user], callback);
            },
            getUserMapRun:function(user, map, ranked, callback){
                db.query("SELECT * FROM runs WHERE id_u = ? AND id_m = ? AND ranked = ?;", [user, map, ranked], callback);
            },
            updateUserMapRun:function(user, ranked, map, datas, callback){
                db.query("UPDATE runs SET ? WHERE ?", [datas, {id_u:user, id_m:map, ranked:ranked}], callback);
            },
            addRun:function(datas, callback){
                db.query("INSERT INTO runs SET ?", datas, callback);
            }
        },
        skins:{
            getSkin:function(id, callback){
                db.query("SELECT * FROM skins WHERE id_s = ?;", [id], callback);
            },
            getUserSkin:function(user, skin, callback){
                db.query("SELECT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = ? AND us.id_s = s.id;", [user, skin], callback);
            },
            getUserSkins:function(user, callback){
                db.query("SELECT * FROM skins s, user_skin us WHERE us.id_u = ? AND us.id_s = s.id;", [id], callback);
            },
            getAllSkins:function(callback){
                db.query("SELECT * FROM skins;", callback);
            },
            addUserSkin:function(user, skin, callback){
                db.query("INSERT INTO user_skin SET ?", {id_u:user, id_s:skin}, callback);
            }
        }
    }
}