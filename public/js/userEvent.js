$(function(){
	document.body.addEventListener("keydown", function(e) {
		client.keys[e.keyCode] = true;
	});

	document.body.addEventListener("keyup", function(e) {
		client.keys[e.keyCode] = false;
	});
});