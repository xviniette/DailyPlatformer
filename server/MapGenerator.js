module.exports = {};

var Box = function (x, y, w, h) {
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;
}

var rand = function (min, max) {
    var res = Math.floor(Math.random() * (max - min + 1) + min)
    return res;
}

var right = function (box) {
    var gap = rand(3, 8);
    var width = rand(1, 6);
    var height = rand(1, 3);

    return new Box(box.x + box.w + gap, box.y, width, height);
}

var upright = function (box) {
    var gap = rand(0, 4);
    var gapH = rand(2, 6);
    var width = rand(1, 5);
    var height = rand(1, 5);

    return new Box(box.x + box.w + gap, box.y - gapH, width, height);
}

var upleft = function (box) {
    var gap = rand(0, 4);
    var gapH = rand(2, 6);
    var width = rand(1, 5);
    var height = rand(1, 5);

    return new Box(box.x - gap - width, box.y - gapH, width, height);
}

var drop = function (box) {
    var gap = rand(-2, 5);
    var gapH = rand(2, 8);
    var width = rand(3, 6);
    var height = rand(1, 4);

    return new Box(box.x + box.w + gap, box.y + gapH, width, height);
}

var generate = function () {
    var world = [];

    var steps = {

    }

    var directions = {
        RIGHT: 0,
        UPRIGHT: 1,
        UPLEFT: 2,
        UP: 3,
        DROP: 4
    };

    var prevdir = directions.RIGHT;

    var currentBox = null;

    var nb = new Box(20, 100, 3, 1);
    currentBox = nb;
    world.push(currentBox);

    var repeat = function (n, f) {
        for (var i = 0; i < n; i++) {
            var nb = f(currentBox);
            currentBox = nb;
            world.push(nb);
        }
    }

    for (var i = 0; i < 20; i++) {
        var dirArray = [directions.RIGHT, directions.UPRIGHT, directions.UPLEFT, directions.DROP, directions.DROP];
        var newDir = dirArray[rand(0, dirArray.length)];
        switch (newDir) {
            case directions.RIGHT:
                if (prevdir == directions.UPLEFT) {
                    repeat(1, right);
                }
                repeat(rand(3, 6), right);
                break;
            case directions.UPRIGHT:
                repeat(rand(2, 4), upright);
                break;
            case directions.UPLEFT:
                if (prevdir == directions.RIGHT)
                    continue;
                repeat(rand(1, 3), upleft);
                break;
            case directions.DROP:
                if (prevdir == directions.UPLEFT) {
                    continue;
                }
                repeat(rand(1, 3), drop);
                break;
        }
        prevdir = newDir;
    }
    repeat(1, right);

    return world;
}

module.exports.generateMap = function () {
    var world = generate();

    var bounds = {
        minx:99999,
        miny:999999,
        maxx:-1,
        maxy:-1
    }

    for(var i in world){
        if(world[i].x < bounds.minx){
            bounds.minx = world[i].x;
        }

        if(world[i].x + world[i].w > bounds.maxx){
            bounds.maxx = world[i].x + world[i].w;
        }

        if(world[i].y < bounds.miny){
            bounds.miny = world[i].y;
        }

        if(world[i].y + world[i].h > bounds.maxy){
            bounds.maxy = world[i].y + world[i].h;
        }
    }

    var tiles = [];

    for(var i = 0; i < bounds.maxx - bounds.minx; i++){
        tiles[i] = [];
        for(var j = 0; j < bounds.maxy - bounds.miny; j++){
            tiles[i][j] = 0;
        }
    }

    for(var i in world){
        var tag = 1;
        if(i == world.length - 1){
            tag = 2;
        }
        var b = world[i];
        for(var w = 0; w < b.w; w++){
            tiles[b.x + w - bounds.minx][b.y - bounds.miny] = tag;

            for(var h = 0; h < b.h; h++){
                tiles[b.x + w - bounds.minx][b.y + h - bounds.miny] = tag;
            }
        }
        
    }

    var player = {
            x:(world[0].x - bounds.minx) * 20 + 20 + 20/2,
            y:(world[0].y - bounds.miny) * 20 - 20/2,
        };

        var px = world[0].x - bounds.minx;
        var py = world[0].y - bounds.miny;
        while(!tiles[px][py]){
            py--;
        }
    return datas = {
        tiles:tiles,
        player:{
            x:px * 20 + 20 + 20/2,
            y:py * 20 - 20/2,
        }
    };
}