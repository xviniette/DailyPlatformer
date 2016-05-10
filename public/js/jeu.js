var client;
var isServer = false;
var socket;

$(function(){
	client = new Client();
	//Interval client
	var lastTs = Date.now();

	var lastTs = Date.now();
	var update = function(){
		var ts = Date.now();
		var delta = 1000/FPS;
		while(ts - lastTs >= delta){
			client.update();
			lastTs += delta;
		}
		requestAnimationFrame(update);
	}
	requestAnimationFrame(update);
});

