$(function(){
	var inputs = $("input");
	document.body.addEventListener("keydown", function(e) {
		if(inputs.is(":focus")){
			return;
		}
		client.keys[e.keyCode] = true;
	});

	document.body.addEventListener("keyup", function(e) {
		client.keys[e.keyCode] = false;
	});

	$.ajaxSetup({
		beforeSend: function(xhr) {
			var token = localStorage.getItem("token");
			if(token){
				xhr.setRequestHeader('Authorization', token);
			}
		}
	});

	window.onresize = function(){
		resizeCanvas();
	}

	var resizeCanvas = function(){
		var canvas = document.querySelector("#canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	resizeCanvas();
});