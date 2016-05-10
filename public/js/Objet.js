var Objet = function(){
	this.room;
	this.x = 0;
	this.y = 0;
	this.cx = 0;
	this.cy = 0;
	this.rx = 0;
	this.ry = 0;
	this.dx = 0;
	this.dy = 0;
	this.radius = 1;
	this.rapport = 1;
	this.acceleration = 1;

	this.positions = []; //{timestamp, x, y}
}

Objet.prototype.setCoordinate = function(x, y){
	var tilesize = this.room.map.tilesize;
	this.x = x;
	this.y = y;

	this.cx = Math.floor(x/tilesize);
	this.cy = Math.floor(y/tilesize);

	this.rx = (x-this.cx*tilesize)/tilesize;
	this.ry = (y-this.cy*tilesize)/tilesize;
}

Objet.prototype.physic = function(){
	var delta = this.room.delta;
	var tilesize = this.room.map.tilesize;
	var tiles = this.room.map.tiles;
	this.rx += this.dx;
	this.dx *= this.friction.x;
	this.dx = toFixed(this.dx, 4);

	this.onGround = false;
	this.dy += this.gravity * delta;
	this.ry += this.dy;
	this.dy *= this.friction.y;
	this.dy = toFixed(this.dy, 4);

	if(!(this.hasWallCollision(this.cx, this.cy) && this.cx > 0 && this.cx < tiles.length - 1)){
		if(this.hasWallCollision(this.cx - 1, this.cy) && this.rx < this.rapport && this.dx < 0){
			this.dx *= this.bounce.x * -1;
			this.rx = this.rapport;
		}
		if(this.hasWallCollision(this.cx + 1, this.cy) && this.rx > 1 - this.rapport && this.dx > 0){
			this.dx *= this.bounce.x * -1;
			this.rx = 1 - this.rapport;
		}
	}

	while(this.rx < 0){this.rx++;this.cx--;}
	while(this.rx > 1){this.rx--;this.cx++;}
	
	var gap = 1;

	if(this.ry < this.rapport && this.dy < 0 && 
		(this.hasWallCollision(this.cx, this.cy - 1)
			|| (this.hasWallCollision(this.cx + 1, this.cy - 1) && this.rx > 1 - this.rapport * gap)
			|| (this.hasWallCollision(this.cx - 1, this.cy - 1) && this.rx < this.rapport * gap))
		){
		this.dy = 0;
	this.ry = this.rapport;
}
if(this.dy > 0 &&  this.ry > 1 - this.rapport &&
	((this.hasWallCollision(this.cx, this.cy + 1))
		|| (this.hasWallCollision(this.cx + 1, this.cy + 1) && this.rx > 1 - this.rapport * gap)
		|| (this.hasWallCollision(this.cx - 1, this.cy + 1) && this.rx < this.rapport * gap)
		)){
	this.onGround = true;
this.dy = 0;
this.ry = 1 - this.rapport;
}

	//On met les bonnes valeurs pour ry/cy
	while(this.ry < 0){this.ry++;this.cy--;}
	while(this.ry > 1){this.ry--;this.cy++;}

	//On arrondi
	this.rx = toFixed(this.rx, 3);
	this.ry = toFixed(this.ry, 3);

	this.x = Math.floor((this.cx + this.rx) * tilesize);
	this.y = Math.floor((this.cy + this.ry) * tilesize);
}

Objet.prototype.hasWallCollision = function(cx, cy){
	tiles = this.room.map.tiles;
	if(cx < 0 || cx >= tiles.length || cy < 0 || cy >= tiles[cx].length){
		return true;
	}
	return (tiles[cx][cy] === 1);
}

Objet.prototype.hasObjectCollision = function(obj){
	var distance = Math.sqrt(Math.pow(obj.x - this.x, 2) + Math.pow(obj.y - this.y, 2));
	if(distance <= this.radius + obj.radius){
		var d = toFixed(distance, 2);
		return d > 0 ? d : 1
	}
	return false;
}

Objet.prototype.isOutsideMap = function(){
	var tilesize = this.room.map.tilesize;
	var tiles = this.room.map.tiles;
	if(this.x < 0 || this.x > tiles.length * tilesize || this.y > tiles[0].length * tilesize){
		return true;
	}
	return false;
}

Objet.prototype.interpolate = function(tps, delta){
	var value = ["x", "y"];
	var pos = {};
	if(this.positions.length == 0){
		return false;
	}
	if(this.positions.length == 1){
		for(var k in value){
			pos[value[k]] = this.positions[0][value[k]];
		}
		return pos;
	}

	var time = tps - delta;
	for(var i = 0; i < this.positions.length - 1; i++){
		if(this.positions[i].t < time && time <= this.positions[i + 1].t){
			var ratio = (time - this.positions[i].t)/(this.positions[i + 1].t - this.positions[i].t);
			for(var k in value){
				pos[value[k]] = this.positions[i][value[k]] + ratio * (this.positions[i + 1][value[k]] - this.positions[i][value[k]]);
			}
			if(i > 0){
				this.positions.splice(0, i);
			}
			return pos;
		}
	}
	return false;
}
