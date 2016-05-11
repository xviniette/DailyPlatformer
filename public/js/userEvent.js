$(function(){
	document.body.addEventListener("keydown", function(e) {
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

	$("#login_form").submit(function(e){
		e.preventDefault();
		$.post("/user/login", {login:$("#login_login").val(), password:$("#login_password").val()}, function(data){
			console.log("LOGIN", data);
			if(!data.error){
				localStorage.setItem("token", data.token);
			}
		});
	});

	$("#register_form").submit(function(e){
		e.preventDefault();
		$.post("/user/register", {login:$("#register_login").val(), password:$("#register_password").val()}, function(data){
			console.log("REGISTER", data);
			if(!data.error){
				localStorage.setItem("token", data.token);
			}
		});
	});

	$("#disconnect").click(function(e){
		localStorage.removeItem("token");
	});
});