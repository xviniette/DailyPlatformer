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

    this.xmaxspeed = 350;

    this.groundAcceleration = 50;
    this.airAcceleration = 50;

    this.groundFriction = 100;
    this.airFriction = 50;

    this.groundFrictionThreshold = 100;
    this.airFrictionThreshold = 50;

    this.normalGravity = 15;
    this.normalMaxGravity = 350;

    this.wallGravity = 5;
    this.wallMaxGravity = 150;

    this.gravity = 0;
    this.maxgravity = 0;

    this.jump = 450;
    this.wallJump = 450;

    this.wallExpulsion = 400;

    this.wallStick = 10;

    this.hisWalling = 0;
    this.wallTimer = 0;
    this.newWallContact = false;

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


    this.gravity = this.normalGravity;
    this.maxgravity = this.normalMaxGravity;

    var frictionThreshold = this.groundFrictionThreshold;

    if (!this.onGround) {
        frictionThreshold = this.airFrictionThreshold;
    } else {
        this.wallTimer = 0;
    }

    if ((!inp.r && !inp.l) || (inp.r && inp.l)) {
        if (Math.abs(this.dx) < frictionThreshold / tilesize * delta) {
            this.dx = 0;
        } else {
            if (Math.abs(this.dx) > 0) {
                var sign = -1;
                if (this.dx < 0) {
                    sign = 1;
                }
                if (this.onGround) {
                    this.dx += this.groundFriction * sign / tilesize * delta;
                } else {
                    this.dx += this.airFriction * sign / tilesize * delta;
                }
            }
        }
    } else {
        if (inp.r && this.dx < this.xmaxspeed / tilesize * delta && this.wallTimer == 0) {
            this.direction = 1;
            if (this.onGround) {
                this.dx += this.groundAcceleration / tilesize * delta;
            } else {
                this.dx += this.airAcceleration / tilesize * delta;
            }
        } else if (inp.l && this.dx > -this.xmaxspeed / tilesize * delta && this.wallTimer == 0) {
            this.direction = -1;
            if (this.onGround) {
                this.dx -= this.groundAcceleration / tilesize * delta;
            } else {
                this.dx -= this.airAcceleration / tilesize * delta;
            }
        }
    }

    if (inp.u) {
        if (this.onGround && !this.lastInput.u) {
            this.dy = -this.jump / tilesize * delta;
        } else {
            if (this.hisWalling != 0 && !this.lastInput.u && !this.onGround) {
                this.dy = -this.wallJump / tilesize * delta;
                this.dx = this.wallExpulsion / tilesize * delta * -this.hisWalling;
                this.wallTimer = 0;
            }
        }
    }

    if (this.hisWalling && this.dy > 0) {
        this.gravity = this.wallGravity;
        this.maxgravity = this.wallMaxGravity;



    }

    if (this.wallTimer == 0 && this.newWallContact) {
        this.wallTimer = this.wallStick;
    }

    if (this.wallTimer > 0) {
        this.wallTimer--;
    }

    if (this.dy < 0) {
        if (!inp.u) {
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