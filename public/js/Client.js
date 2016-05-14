var Client = function(){
	this.display = new Display({client:this});

	this.delta = 1000/FPS/1000;

	this.map = null;
	this.player = new Player({room:this});

	this.keys = [];

	this.init();
}

Client.prototype.init = function(data){
}

Client.prototype.loadMap = function(data){
	this.map = new Map(data);
	this.player.setCoordinate(this.map.player.x, this.map.player.y);
}
	

Client.prototype.update = function(){
	if(this.player != null && this.map != null){
		this.player.update(this.checkKeys());
	}
	if(this.map != null){
		this.display.render();
	}
}

Client.prototype.checkKeys = function(){
	var input = {};
	for(var i in INPUTS){
		for(var j in INPUTS[i]){
			if(this.keys[INPUTS[i][j]]){
				input[i] = true;
			}
		}
	}
	return input;
}