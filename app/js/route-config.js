(function(){
	angular.module('twitchForce').config(config);
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider){
		$routeProvider
		.when('/streams', {
			templateUrl: 'partials/tf-twitch-panel.html'
		})
		.when('/about', {
			templateUrl: 'partials/tf-twitch-about.html',
		})
		.otherwise({
			redirectTo: '/streams'
		})
	};
})();