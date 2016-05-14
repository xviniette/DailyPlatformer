var fs = require('fs');

eval(fs.readFileSync('./public/js/config.js')+'');
eval(fs.readFileSync('./public/js/clientFunctions.js')+'');
eval(fs.readFileSync('./public/js/Map.js')+'');
eval(fs.readFileSync('./public/js/Objet.js')+'');
eval(fs.readFileSync('./public/js/Player.js')+'');

Player.prototype.finished = function(){
    finished = true;
}

var finished = false;
module.exports = {};

module.exports.runIsValid = function(map, inputs){
    var room = {
        map:new Map(map),
        delta:1000/FPS/1000
    }

    var player = new Player({room:room});
    player.setCoordinate(room.map.player.x, room.map.player.y);

    var saveInterval = 
    for(var i in inputs){
        player.update(inputs[i]);
    }

    if(finished){
        console.log("GG");
        return {
            valid:true,
            frame:inputs.length,
            time:inputs.length*Math.floor(1000/FPS)
        }
    }else{
        console.log("arnaque");
    }
}