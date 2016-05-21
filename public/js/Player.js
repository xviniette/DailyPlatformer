var Player = function(json){
	this.room;

	this.id = 1;
	this.pseudo = null;

	this.x = 0;
	this.y = 0;
	this.cx = 0;
	this.cy = 0;
	this.rx = 0;
	this.ry = 0;
	this.dx = 0;
	this.dy = 0;
	this.acceleration = 1;
	this.radius = 10;
	this.rapport = this.radius/20;

	this.gravity = 1.1;
	this.friction = {x:0, y:0};
	this.bounce = {x:0, y:0};

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

Player.prototype.init = function(json){
	for(var i in json){
		this[i] = json[i];
	}
}

Player.prototype.reset = function(){
	this.setCoordinate(this.room.map.player.x, this.room.map.player.y);
	this.allInputs = [];
	this.dx = 0;
	this.dy = 0;
}

Player.prototype.update = function(inp){
	var delta = 0.016;

	this.friction = {x:0.3,y:0.9};
	this.bounce = {x:0,y:0};

    var inputs = [];
    for(var i in inp){
        inputs.push(i);
    }
	this.allInputs.push(inputs.join(","));
	
	if(inp.u){
		if(this.onGround){
			this.dy = -this.jump * delta;
		}
	}
	if(inp.l){
		this.dx = -this.speed * delta;
		this.direction = -1;
	}
	if(inp.r){
		this.dx = this.speed * delta;
		this.direction = 1;
	}
	this.lastInput = inp;
	this.physic();
}

Player.prototype.finished = function(){
	this.room.end();
}

Player.prototype.getInitInfo = function(){
	return {
		id:this.id,
		pseudo:this.pseudo,
		radius:this.radius,
		x:this.x,
		y:this.y,
		dx:this.dx,
		dy:this.dy
	};
}

Player.prototype.getSnapshotInfo = function(){
	return {
		id:this.id,
		x:this.x,
		y:this.y,
		dx:this.dx,
		dy:this.dy,
		stun:this.stun,
		seq:seq
	};
}