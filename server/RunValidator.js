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

    var positions = [];

    var SAVE_FPS = 10;
    var saveInterval = FPS/SAVE_FPS;
    var incrementeInterval = 0;
    var total = 0;
    for(var i in inputs){
        player.update(inputs[i]);

        if(incrementeInterval == 0){
            positions.push({x:player.x, y:player.y, t:Math.floor(total/saveInterval * 1000/SAVE_FPS)}); 
        }
        incrementeInterval++;
        total++;
        if(incrementeInterval >= saveInterval){
            incrementeInterval = 0;
        }
    }
    positions.push({x:player.x, y:player.y, t:Math.floor(total/saveInterval * 1000/SAVE_FPS)}); 

    if(finished){
        return {
            valid:true,
            time:inputs.length*Math.floor(1000/FPS),
            positions:positions
        }
    }else{
        return false;
    }
}