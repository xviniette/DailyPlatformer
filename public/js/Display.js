var Display = function(json){
	this.client;
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');

	this.center = {
		x:this.canvas.width/2,
		y:this.canvas.height/2
	}

	this.init(json);
}

Display.prototype.init = function(json){
	for(var i in json){
		this[i] = json[i];
	}
}

Display.prototype.render = function(){
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	var player = this.client.player;
	if(player){
		this.center.x = this.canvas.width/2 - player.x;
		this.center.y = this.canvas.height/2 - player.y;
	}

	var map = this.client.map;
	var tilesize = map.tilesize;

	for(var i in map.tiles){
		for(var j in map.tiles[i]){
			if(map.tiles[i][j] != 0){
				switch(map.tiles[i][j]){
					case 2:
					this.ctx.fillStyle = "red";
					break;
					default:
					this.ctx.fillStyle = "black";
				}
				this.ctx.fillRect(i * tilesize + this.center.x, j * tilesize + this.center.y, tilesize, tilesize);
			}
		}
	}

	var ghosts = this.client.ghosts;
	this.ctx.textAlign = "center"; 
	for(var i in ghosts){
		this.ctx.fillStyle = "yellow";
		this.ctx.fillRect(ghosts[i].x  + this.center.x - ghosts[i].radius, ghosts[i].y  + this.center.y - ghosts[i].radius, ghosts[i].radius * 2, ghosts[i].radius * 2);
		this.ctx.fillStyle = "black";
		if(ghosts[i].type=="follow"){
			this.ctx.fillStyle = "green";
		}else if(ghosts[i].type=="me"){
			this.ctx.fillStyle = "red";
		}
		this.ctx.fillText(ghosts[i].pseudo, ghosts[i].x  + this.center.x, ghosts[i].y  + this.center.y - ghosts[i].radius - 5); 
	}


	this.ctx.fillStyle = "blue";
	this.ctx.fillRect(player.x  + this.center.x - player.radius, player.y  + this.center.y - player.radius, player.radius * 2, player.radius * 2);
}