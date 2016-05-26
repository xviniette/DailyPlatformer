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

    this.xspeed = 0;
    this.yspeed = 0;
    this.xmaxspeed = 12 * this.delta;
    this.ymaxspeed = 20 * this.delta;

    this.groundAcceleration = 3 * this.delta;
    this.airAcceleration = 1.5 * this.delta;

    this.groundFriction = 2 * this.delta;
    this.airFriction = 1 * this.delta;
    this.frictionThreshold = 3 * this.delta;


    this.dx = 0;
    this.dy = 0;



    this.acceleration = 1;
    this.radius = 10;
    this.rapport = this.radius / 20;

    this.gravity = 1.1;
    this.friction = { x: 0, y: 0 };
    this.bounce = { x: 0, y: 0 };

    this.speed = 8;
    this.jump = 37;

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

    this.friction = { x: 0.3, y: 0.9 };
    this.bounce = { x: 0, y: 0 };

    var inputs = [];
    for (var i in inp) {
        inputs.push(i);
    }
    this.allInputs.push(inputs.join(","));

    if ((!inp.r && !inp.l) || (inp.r && inp.l)) {
        if(Math.abs(this.dx) < this.frictionThreshold){
            this.dx = 0;
        }else{
            if(Math.abs(this.dx) > 0){
                var sign = -1;
                if(this.dx < 0){
                    sign = 1;
                }
                if(this.onGround){
                    this.dx += this.groundFriction * sign;
                }else{
                    this.dx += this.airFriction * sign;
                }
            }
        }
    } else {
        if (inp.r && this.dx < this.xmaxspeed) {
            this.direction = 1;
            if (this.onGround) {
                this.dx += this.groundAcceleration;
            } else {
                this.dx += this.airAcceleration;
            }
        } else if (inp.l && this.dx > -this.xmaxspeed) {
            this.direction = -1;
            if (this.onGround) {
                this.dx -= this.groundAcceleration;
            } else {
                this.dx -= this.airAcceleration;
            }
        }
    }





    if (inp.u) {
        if (this.onGround) {
            this.dy = -this.jump * delta;
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