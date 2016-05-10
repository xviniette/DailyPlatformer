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
	this.lastAction = 0;
	this.nbInputsExecutable = 0;

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
	this.dx = 0;
	this.dy = 0;
}

Player.prototype.update = function(inp){
	var delta = 0.016;
	var tilesize = this.room.map.tilesize;
	var tiles = this.room.map.tiles;

	this.friction = {x:0.3,y:0.9};
	this.bounce = {x:0,y:0};
	
	var baseInput = {}
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
	if(inp.k && this.lastInput != null && !this.lastInput.k){
		this.kick(inp.svTime);
	}
	if(inp.d && this.lastInput != null && !this.lastInput.d){
		this.up(inp.svTime);
	}
	this.lastInput = inp;
	this.physic();
}

//COMMUN

Player.prototype.hasWallCollision = function(cx, cy){
	tiles = this.room.map.tiles;
	if(cx < 0 || cx >= tiles.length || cy < 0 || cy >= tiles[cx].length){
		return true;
	}
	return (tiles[cx][cy] == 1);
}

Player.prototype.hasObjectCollision = function(obj){
	var distance = Math.sqrt(Math.pow(obj.x - this.x, 2) + Math.pow(obj.y - this.y, 2));
	if(distance <= this.radius + obj.radius){
		var d = Math.round(distance * 100)/100;
		return d > 0 ? d : 1
	}
	return false;
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