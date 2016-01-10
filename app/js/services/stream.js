(function(){
	angular.module('twitchForce')
	.factory('stream', stream);
	
	stream.$inject = ['$http'];
	
	function stream($http){
		var service = {
			all: all,
			save: save
		}
		
		return service;
		
		function all(){
			return $http({method: 'GET', url: 'streams.json'});
		}
		
		function save(data){
			return $http({method: 'POST', url: 'saveStreams.php', data: data});
		}
	};
})();