var Client = function(){
	this.display = new Display({client:this});

	this.delta = 1000/FPS/1000;

	this.map = null;
	this.player = new Player({room:this});
	this.ghosts = [];
	this.runs = [];

	this.keys = [];

	this.init();

	this.started = false;
	this.startingTime = Date.now();


	//gestoin timer
	this.lastTs = Date.now();
}

Client.prototype.init = function(data){
}

Client.prototype.loadMap = function(id){
	var _this = this;

	var loading = function(data){
		_this.map = new Map(data);
		_this.loadRuns(function(){
			_this.initialize();
		});
	}

	if(id == null){
		$.get("/map/current", function(data){
			loading(data);
		});
	}else{
		$.get("/map/"+id, function(data){
			loading(data);
		});
	}
}

Client.prototype.loadRuns = function(callback){
	var _this = this;
	if(this.map != null){
		$.get("/run/ghost/"+this.map.id_m+"/100", function(data){
			_this.runs = data;
			callback();
		});
	}
}


Client.prototype.initialize = function(){
	if(!this.map){
		return;
	}
	
	this.player.reset();
	this.started = false;
	this.startingTime = Date.now();

	this.ghosts = [];
	for(var i in this.runs){
		var p = new Player({
			room:this,
			id:this.runs[i].id_u,
			pseudo:this.runs[i].login
		});
		p.reset();
		p.positions = JSON.parse(this.runs[i].positions);
		this.ghosts.push(p);
	}
}

Client.prototype.starting = function(keys){
	if(this.started == false){
		var oneInputTrue = false;
		for(var i in keys){
			if(keys[i]){
				oneInputTrue = true;
				break;
			}
		}
		if(oneInputTrue){
			this.started = true;
			this.startingTime = Date.now();
		}
	}
}

Client.prototype.end = function(){
	if(this.started){
		$.post("/run/upload/"+this.map.id_m, {inputs:this.player.allInputs.join("|")}, function(data){
			console.log(data);
		});
	}
	this.started = false;
	var _this = this;
	_this.initialize();
}

Client.prototype.update = function(){
	var now = Date.now();
	var delta = 1000/FPS;
	while(now - this.lastTs >= delta){
		this.tick();
		this.lastTs += delta;
	}

	if(this.map != null){
		this.display.render();
	}
}

Client.prototype.tick = function(){
	var now = Date.now();
	if(this.player != null && this.map != null){
		var keys = this.checkKeys();
		this.starting(keys);

		if(this.started){
			this.player.update(keys);

			for(var i in this.ghosts){
				var positions = this.ghosts[i].interpolate(now - this.startingTime, 0);
				if(positions){
					this.ghosts[i].setCoordinate(positions.x, positions.y);
				}
			}
		}
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