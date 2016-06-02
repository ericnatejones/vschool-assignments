var app = angular.module("theLeague");

app.service("getService", ["$http", function ($http) {

    this.database = $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=allytips,altimages,enemytips,image,info,lore,passive,skins,spells,stats,tags&api_key=e6f10be5-793b-460e-a6bf-afbe9578f247");

    this.splash = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

    this.square = "http://ddragon.leagueoflegends.com/cdn/6.10.1/img/champion/Aatrox.png";

    this.loading = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

}]);