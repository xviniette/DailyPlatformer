var vues = {};

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

	window.addEventListener('resize', resizeCanvas, false);

	var resizeCanvas = function(){
		var canvas = document.querySelector("#canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	resizeCanvas();

	// //LOGIN
	// vues.login = new Vue({
	// 	el: '#login_form',
	// 	data:{
	// 		login:null,
	// 		password:null
	// 	},
	// 	methods:{
	// 		submit:function(){
	// 			$.post("/user/login", {login:this.login, password:this.password}, function(data){
	// 				console.log("LOGIN", data);
	// 				if(!data.error){
	// 					localStorage.setItem("token", data.token);
	// 				}
	// 			});
	// 		}
	// 	}
	// });

	// //REGISTER
	// vues.register = new Vue({
	// 	el: '#register_form',
	// 	data:{
	// 		login:null,
	// 		password:null
	// 	},
	// 	methods:{
	// 		submit:function(){
	// 			$.post("/user/register", {login:this.login, password:this.password}, function(data){
	// 				console.log("REGISTER", data);
	// 				if(!data.error){
	// 					localStorage.setItem("token", data.token);
	// 				}
	// 			});
	// 		}
	// 	}
	// });

	// //DISCONNECT
	// vues.disconnect = new Vue({
	// 	el: '#disconnect',
	// 	methods:{
	// 		disconnect:function(){
	// 			localStorage.removeItem("token");
	// 		}
	// 	}
	// });

	// vues.physic = new Vue({
	// 	el: '#physics',
	// 	data:client.player
	// });
});