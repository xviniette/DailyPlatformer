var vues = {};

$(function(){
    vues.profileNav = new Vue({
		el: '#profileNav',
		data:{
            
		},
		methods:{
			click:function(){
                var token = localStorage.getItem("token");
                if(token){
                    $.get("/user/profile", function(res){
                        vues.profile.login = res.login;
                        $("#profile").show();
                    });
                }
			}
		}
	});

    vues.profile = new Vue({
		el: '#profile',
		data:{
		},
		methods:{
			
		}
	});
});