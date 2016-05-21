var client;
var isServer = false;
var socket;

$(function(){
	client = new Client();
	client.loadMap();

	var update = function(){
		client.update();
		requestAnimationFrame(update);
	}
	requestAnimationFrame(update);
});

