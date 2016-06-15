var vues = {};

$(function () {

	var token = localStorage.getItem("token");
	if(token != undefined){
		$.get("/user/profile", function(data){
			client.user = data;
		});
	}


	$(".menu").on("click", function () {
		switch ($(this).attr("modal")) {
			case "profile":
				if(client.user){
					//Profile
					$.get("/user/profile", function (res) {
						vues.profile.$set("profile", res);
					});
					$.get("/skin/all/"+client.user.login, function (res) {
						vues.profile.$set("skins", res);
					});
					$.get("/achievement/all/"+client.user.login, function (res) {
						vues.profile.$set("achievements", res);
					});
					$("#profile").show();
				}else{
					//Connexion/Inscription
				}
				break;

			case "skin":
				if(client.user){
					//Connected
					vues.skin.$set("golds", client.user.golds);
					vues.skin.$set("gems", client.user.gems);
					$.get("/skin/all/"+client.user.login, function (res) {
						vues.skin.$set("userSkins", res);
					});
					$.get("/skin/notall/"+client.user.login, function (res) {
						vues.skin.$set("nonUserSkins", res);
					});
				}else{
					//Not connected
					$.get("/skin/all", function (res) {
						vues.skin.$set("nonUserSkins", res);
					});
				}
				$("#skin").show();
				break;

			case "ranking":
				$("#ranking").show();
				break;

			case "map":
				$.get("/map/all", function(res){
					vues.map.$set("maps", res);
				});
				if(client.user){
					$.get("/run/all", function(res){
						vues.map.$set("runs", res);
					});
				}
				$("#map").show();
				break;

			case "social":
				$("#social").show();
				break;

			case "option":
				$("#option").show();
				break;

		}
	});


    vues.profile = new Vue({
		el: '#profile',
		data: {
			profile: {},
			skins: [],
			achievements: []
		},
		methods: {

		}
	});

	vues.skin = new Vue({
		el: '#skin',
		data: {
			golds:null,
			gems:null,
			userSkins: [],
			nonUserSkins: [],
		},
	});


	vues.ranking = new Vue({
		el: '#ranking',
		data: {
			players: []
		},
		methods: {

		}
	});

	vues.map = new Vue({
		el: '#map',
		data: {
			maps: [],
			runs: []
		},
		methods: {

		}
	});
});