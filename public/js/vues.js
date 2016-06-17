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
				if(client.user){
					vues.profile.load(client.user.login);
				}else{

				}
				break;
			case "skin":
				vues.skin.load();
				break;

			case "ranking":
				vues.ranking.load();
				break;

			case "map":
				vues.map.load();
				break;

			case "social":
				vues.social.load();
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
			load: function (login) {
				var _this = this;
					//Profile
					$.get("/user/profile/" + login, function (res) {
						_this.profile = res;
					});
					$.get("/skin/all/" + login, function (res) {
						_this.skins = res;
					});
					$.get("/achievement/all/" + login, function (res) {
						_this.achievements = res;
					});
			
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
				var _this = this;
				if (client.user) {
					_this.golds = client.user.golds;
					_this.gems = client.user.gems;
					$.get("/skin/all/" + client.user.login, function (res) {
						_this.userSkins = res;
					});
					$.get("/skin/notall/" + client.user.login, function (res) {
						_this.nonUserSkins = res;
					});
				} else {
					$.get("/skin/all", function (res) {
						_this.nonUserSkins = res;
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
			mapRanked:[],
			mapUnranked:[],
			overall:[]
		},
		methods: {
			load:function(){
				this.overallRanking("elo");
				this.mapRankedRanking();
				this.mapUnrankedRanking();
				$("#ranking").show();
			},
			overallRanking:function(attr, lim, page){
				var _this = this;
				var limit = 100;
				var offset = 0;
				if(lim){
					limit = lim;
				}
				if(page){
					offset = limit * page;
				}
				var attribute = "elo";
				if(attr == "xp"){
					attribute = "xp";
				}
				$.get("/user/ranking/"+attribute+"/"+limit+"/"+offset, function(res){
					_this.overall = res;
				});
			},
			mapRankedRanking:function(lim, page){
				var _this = this;
				var limit = 100;
				var offset = 0;
				if(lim){
					limit = lim;
				}
				if(page){
					offset = limit * page;
				}

				var map = 0;
				if(client.map){
					map = client.map.id_m;
				}
				$.get("/run/best/"+map+"/1/"+limit+"/"+offset, function(res){
					_this.mapRanked = res;
				});
			},
			mapUnrankedRanking:function(lim, page){
				var _this = this;
				var limit = 100;
				var offset = 0;
				if(lim){
					limit = lim;
				}
				if(page){
					offset = limit * page;
				}

				var map = 0;
				if(client.map){
					map = client.map.id_m;
				}
				$.get("/run/best/"+map+"/0/"+limit+"/"+offset, function(res){
					_this.mapUnranked = res;
				});
			},
			profile:function(login){
				vues.profile.load(login);
			}
		}
	});

	vues.map = new Vue({
		el: '#map',
		data: {
			maps: [],
			runs: [],
			mapRun:[],
			nextTime:null,
			timeleft:null,

		},
		computed:{
			mapRun:function(){
				var maps = JSON.parse(JSON.stringify(this.maps));
				var runs = JSON.parse(JSON.stringify(this.runs));
				var data = [];
				for(var i = maps.length - 1; i >= 0; i--){
					if(i == maps.length - 1){
						maps[i].current = true;
					}else if(i >= maps.length - 1 - 10){
						maps[i].rewarded = true;
					}
					for(var j in runs){
						if(runs[j].id_m == maps[i].id_m){
							if(i == maps.length - 1 &&  runs[j].ranked == 1){
								maps[i].run = runs[j];
							}else if(i < maps.length - 1 && runs[j].ranked == 0){
								maps.run = runs[j];
								var medals = ["master", "gold", "silver", "bronze"];
								for(var m of medals){
									if(runs[j].time <= maps[i][m]){
										runs[j].medal = m;
										break;
									}
								}
								maps[i].run = runs[j];
							}
						}
					}
					data.push(maps[i]);
				}
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

	vues.social = new Vue({
		el: '#social',
		data: {
			followeds: [],
			followers: [],
		},
		methods: {
			load: function () {
				var _this = this;
				if (client.user) {
					$.get("/user/followers/", function (res) {
						_this.followers = res;
					});
					$.get("/user/followeds/", function (res) {
						_this.followeds = res;
					});
				}
				$("#social").show();
			},
			follow:function(login){
				var _this = this;
				$.post("/user/follow/"+login, function(res){
					_this.load();
				});
			},
			unfollow:function(login){
				var _this = this;
				$.post("/user/unfollow/"+login, function(res){
					_this.load();
				});
			},
			profile:function(login){
				vues.profile.load(login);
			}
		}
	});
});