var vues = {};

$(function () {

	var token = localStorage.getItem("token");
	if (token != undefined) {
		$.get("/user/profile", function (data) {
			client.user = data;
		});
	}

	$(".close").on("click", function(){
		$(this).parent().hide();
	});

	$(".menu").on("click", function () {
		switch ($(this).attr("modal")) {
			case "profile":
				vues.profile.load();
				break;

			case "skin":
				vues.skin.load();
				break;

			case "ranking":
				$("#ranking").show();
				break;

			case "map":
				vues.map.load();
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
			load: function () {
				var _this = this;
				if (client.user) {
					//Profile
					$.get("/user/profile", function (res) {
						_this.profile = res;
					});
					$.get("/skin/all/" + client.user.login, function (res) {
						_this.skins = res;
					});
					$.get("/achievement/all/" + client.user.login, function (res) {
						_this.achievements = res;
					});
				} else {
					//Connexion/Inscription
				}
				$("#profile").show();
			}
		}
	});

	vues.skin = new Vue({
		el: '#skin',
		data: {
			golds: null,
			gems: null,
			userSkins: [],
			nonUserSkins: [],
		},
		methods: {
			load: function () {
				if (client.user) {
					this.golds = client.user.golds;
					this.gems = client.user.gems;
					$.get("/skin/all/" + client.user.login, function (res) {
						vues.skin.$set("userSkins", res);
					});
					$.get("/skin/notall/" + client.user.login, function (res) {
						vues.skin.$set("nonUserSkins", res);
					});
				} else {
					$.get("/skin/all", function (res) {
						vues.skin.$set("nonUserSkins", res);
					});
				}
				$("#skin").show();
			},
			drop: function (type) {
				var datas = {};
				if (type == 1) {
					datas.gems = 1;
				}
				var _this = this;
				$.post("/skin/drop", datas, function (res) {
					if (!res.error) {
						$.get("/user/profile", function (res) {
							client.user = res;
							_this.load();
						});
					}
				});
			},
			buy: function (id) {
				var _this = this;
				$.post("/skin/buy/" + id, function (res) {
					if(!res.error){
						$.get("/user/profile", function (res) {
							client.user = res;
						});
						_this.load();
					}
				});
			}
		}
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
			runs: [],
			nextTime:null,
			timeleft:null		
		},
		computed:{
			mapRun: function(){
				var data = [];
				for(var i = this.maps.length - 1; i >= 0; i--){
					for(var j in this.runs){
						if(this.runs[j].id_m == this.maps[i].id_m){
							if(i == 0 &&  this.runs[j].ranked == 1){
								this.maps[i].current = true;
								this.maps[i].run = this.runs[j];
							}else if(i < this.maps.length - 1 && this.runs[j].ranked == 0){
								this.maps.run = this.runs[j];
								if(i > this.maps.length - 10){
									this.maps[i].rewarded = true;
								}
								this.maps[i].run = this.runs[j];
								var medals = ["master", "gold", "silver", "bronze"];
								for(var m of medals){
									if(this.runs[j].time <= this.maps[i][m]){
										this.maps[i].run.medal = m;
										break;
									}
								}
							}
						}
					}
					data.push(this.maps[i]);
				}
				console.log(data);
				return data;
			}
		},
		methods: {
			load: function () {
				var _this = this;
				$.get("/map/all", function (res) {
					_this.maps = res;
				});
				$.get("/map/nextTime", function (res) {
					_this.nextTime = Date.now() + res.timeleft;
				});
				if (client.user) {
					$.get("/run/all", function (res) {
						_this.runs = res;
					});
				}
				$("#map").show();
			}
		}
	});
	setInterval(function(){
		if(vues.map.nextTime != null){
			vues.map.timeleft = vues.map.nextTime - Date.now();
		}
	}, 1000);
});