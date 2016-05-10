var Client = function(){
	this.display = new Display({client:this});

	this.delta = 1000/FPS/1000;

	this.map = new Map(JSON.parse(lamap));
	this.player = new Player({room:this});
	this.player.setCoordinate(100, 100);

	this.keys = [];

	this.init();
}

Client.prototype.init = function(data){
}
	

Client.prototype.update = function(){
	this.player.update(this.checkKeys());
	this.display.render();
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