/**
 * 1、歌曲搜索接口
 * 地址：https://autumnfish.cn/search
 * get
 * keywords
 * 2、歌曲url获取
 * 请求地址：https://autumnfish.cn/song/url
 * get
 * 歌曲id
 * 歌曲url	
 */
var app = new Vue({
	el:"#player",
	data:{
		query:"",
		music:[],
		musicUrl:""
	},
	methods:{
		searchMusic:function(){
			var that = this;
			axios.get("http://musicapi.leanapp.cn/search?keywords="+this.query)
			.then(function(response){
				// console.log(response);
				that.music = response.data.result.songs;
			},
			function(err){
				
			})
		},
		palyMusic:function(musicId){
			var that = this;
			console.log(musicId);
			axios.get("http://musicapi.leanapp.cn/song/url?id="+musicId)
			.then(function(response){
				console.log(response.data.data[0].url)
				that.musicUrl = response.data.data[0].url
			},
			function(err){
				
			}
			)
		}
	}
})