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

	var map = this.client.map;
	var tilesize = map.tilesize;

	this.ctx.fillStyle = "black";

	for(var i in map.tiles){
		for(var j in map.tiles[i]){
			if(map.tiles[i][j] == 1){
				this.ctx.fillRect(i * tilesize, j * tilesize, tilesize, tilesize);
			}
		}
	}

	var player = this.client.player;

	this.ctx.fillStyle = "blue";
	this.ctx.fillRect(player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
}