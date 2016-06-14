var vues = {};

$(function () {

	$(".menu").on("click", function () {
		switch ($(this).attr("modal")) {
			case "profile":
				$.get("/user/profile", function (res) {
					vues.profile.$set("profile", res);
					$("#profile").show();
				});
				break;

			case "skin":
				$("#skin").show();
				break;

			case "ranking":
				$("#ranking").show();
				break;

			case "map":
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
			golds:[],
			gems:[],
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
});