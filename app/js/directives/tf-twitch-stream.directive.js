(function(){
	angular.module('twitchForce')
	.directive('tfTwitch', tfTwitch);
	
	function tfTwitch(){
		return {
			restrict: 'E',
			templateUrl: "partials/tf-twitch-stream.html",
			controller: 'TwitchStreamController',
			controllerAs: 'twitchCtrl',
			scope: {
				stream: '=',
				index: '@'
			}
		}
	}
})();