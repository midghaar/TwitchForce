(function(){
	angular.module('twitchForce')
	.controller('TwitchStreamController', TwitchStreamController);
	
	TwitchStreamController.$inject = ['$scope', 'favorite']
	
	function TwitchStreamController($scope, favorite){
		var vm = this;
		vm.showInfo = false;
		vm.formUrl = "partials/tf-twitch-form.html";
		vm.favesUrl = "partials/tf-twitch-favorites.html";
		vm.tempStream = angular.copy($scope.stream);
		vm.favorites = [];
		
		favorite.all().success(function(data){
			vm.favorites = data;
		});
		
		vm.saveStream = function(stream){
			$scope.stream = angular.copy(stream);
			$scope.$parent.saveStreams($scope.stream, $scope.index);
		}
	}
})();