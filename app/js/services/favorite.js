(function() {
	angular.module('twitchForce')
	.factory('favorite', favorite);
	
	favorite.$inject = ['$http'];
	
	function favorite($http){
		var service = {
			all: all,
			save: save
		};
		
		return service;
		
		function all(){
	    	return $http({method: 'GET', url: 'favorites.json'});
	    }
		
		function save(data){
			return $http({method: 'POST', url: 'saveFavorites.php', data: data});
		}
	};
})();