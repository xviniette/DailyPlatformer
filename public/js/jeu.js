var client;
var isServer = false;
var socket;

$(function(){
	client = new Client();
	client.loadMap(3);

	var update = function(){
		client.update();
		requestAnimationFrame(update);
	}
	requestAnimationFrame(update);
});

