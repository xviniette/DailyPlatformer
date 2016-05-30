var Player = function (json) {
    this.room;

    this.id = 1;
    this.pseudo = null;

    this.delta = 0.016;
    
    this.x = 0;
    this.y = 0;
    this.cx = 0;
    this.cy = 0;
    this.rx = 0;
    this.ry = 0;

    this.xmaxspeed = 12;

    this.groundAcceleration = 3;
    this.airAcceleration = 1.5;

    this.groundFriction = 2;
    this.airFriction = 1;
    this.frictionThreshold = 3;
    
    this.gravity = 0.8;
    this.maxgravity = 20;
    
    this.jump = 25;
    
    this.dx = 0;
    this.dy = 0;

    this.radius = 10;
    this.rapport = this.radius / 20;

    this.onGround = false;

    this.direction = 1;

    this.inputs = [];
    this.lastInput = null;

    this.allInputs = [];

    this.sprite = null;

    this.init(json);
}

Player.prototype = Object.create(Objet.prototype);

Player.prototype.init = function (json) {
    for (var i in json) {
        this[i] = json[i];
    }
}

Player.prototype.reset = function () {
    this.setCoordinate(this.room.map.player.x, this.room.map.player.y);
    this.allInputs = [];
    this.dx = 0;
    this.dy = 0;
}

Player.prototype.update = function (inp) {
    var delta = 0.016;
    var tilesize = this.room.map.tilesize;

    var inputs = [];
    for (var i in inp) {
        inputs.push(i);
    }
    this.allInputs.push(inputs.join(","));

    if ((!inp.r && !inp.l) || (inp.r && inp.l)) {
        if(Math.abs(this.dx) < this.frictionThreshold / tilesize * delta){
            this.dx = 0;
        }else{
            if(Math.abs(this.dx) > 0){
                var sign = -1;
                if(this.dx < 0){
                    sign = 1;
                }
                if(this.onGround){
                    this.dx += this.groundFriction * sign / tilesize * delta;
                }else{
                    this.dx += this.airFriction * sign / tilesize * delta;
                }
            }
        }
    } else {
        if (inp.r && this.dx < this.xmaxspeed / tilesize * delta) {
            this.direction = 1;
            if (this.onGround) {
                this.dx += this.groundAcceleration / tilesize * delta;
            } else {
                this.dx += this.airAcceleration / tilesize * delta;
            }
        } else if (inp.l && this.dx > -this.xmaxspeed / tilesize * delta) {
            this.direction = -1;
            if (this.onGround) {
                this.dx -= this.groundAcceleration / tilesize * delta;
            } else {
                this.dx -= this.airAcceleration / tilesize * delta;
            }
        }
    }


    if (inp.u) {
        if (this.onGround) {
            this.dy = -this.jump / tilesize * delta;
        }
    }
    
    if(this.dy < 0){
        if(!inp.u){
            this.dy = 0;
        }
    }
    
    this.lastInput = inp;
    this.physic();
}

Player.prototype.finished = function () {
    this.room.end();
}

Player.prototype.getInitInfo = function () {
    return {
        id: this.id,
        pseudo: this.pseudo,
        radius: this.radius,
        x: this.x,
        y: this.y,
        dx: this.dx,
        dy: this.dy
    };
}

Player.prototype.getSnapshotInfo = function () {
    return {
        id: this.id,
        x: this.x,
        y: this.y,
        dx: this.dx,
        dy: this.dy,
        stun: this.stun,
        seq: seq
    };
}