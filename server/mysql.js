var mysql = require('mysql');

module.exports = function(app){
    var db;
    db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'platformer'
    });

    db.connect(function(err){
        if(err) {
            console.log("Error connecting database \n\n");  
            process.exit();
        }else{
            console.log("Database : OK");
        }
    });

    var getUserById = function(id, callback){
        db.query("SELECT * FROM users WHERE id = ?;", [id], callback);
    }

    var getUserByLogin = function(login, callback){
        db.query("SELECT * FROM users WHERE login = ?;", [login], callback);
    }

    var getUserAuthentification = function(login, password, callback){
        db.query("SELECT * FROM users WHERE login = ? AND password = ?;", [login, password], callback);
    }

    var getUserByToken = function(token, callback){
        db.query("SELECT * FROM users WHERE token = ?;", [token], callback);
    }

    return {
        user:{
            getUserById:function(id, callback){
                db.query("SELECT * FROM users WHERE id = ?;", [id], callback);
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
                db.query("UPDATE users SET ? WHERE ?", [datas, {id:id}], callback);
            }
        }
    }
}