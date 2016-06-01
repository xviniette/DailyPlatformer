module.exports = {
    jwtKey:"elbazialegod",
    mysql:{
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'platformer'
    },
    glicko:{
        rating:1500,
        rd:300,
        tau:0.5,
        vol:0.06
    }
}