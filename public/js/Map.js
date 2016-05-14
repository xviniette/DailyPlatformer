var Map = function(json){
	this.id_m;
	this.tilesize = 20;
	this.timestamp;
	this.tiles = [];
	this.player;


	this.init(json);
}

Map.prototype.init = function(json){
	for(var i in json){
		try {
			json[i] = JSON.parse(json[i]);
		}catch (e) {
		}
		this[i] = json[i];
	}
}

Map.prototype.getInitInfos = function(){
	return {
		id:this.id,
		name:this.name,
		tiles:this.tiles,
		tilesize:this.tilesize,
		player:this.player
	};
}