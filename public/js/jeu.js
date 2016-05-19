var client;
var isServer = false;
var socket;

$(function(){
	client = new Client();
	client.loadMap(1);

	var update = function(){
		client.update();
		requestAnimationFrame(update);
	}
	requestAnimationFrame(update);
});

