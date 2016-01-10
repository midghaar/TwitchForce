(function(){
	angular.module('twitchForce')
	.controller('TwitchPanelController', TwitchPanelController);
	
	TwitchPanelController.$inject = ['$scope', 'stream', 'favorite'];
	
	function TwitchPanelController($scope, stream, favorite){
		var vm = this;
		$scope.cinematic = false;
		$scope.newPlayer = false;
		vm.streams = [];
		vm.backImgUrl = "http://www.modvive.com/wp-content/uploads/2015/09/twitch-tv-2.jpg";
		vm.newUrl = vm.backImgUrl;
		vm.newFavorite = {};
		
		stream.all().success(function(data){
			vm.streams = data;
		});
		
		$scope.saveStreams = function(changedStream, index){
			vm.streams[index] = changedStream;
			stream.save(vm.streams);
		};

		vm.addFavorite = function(){
			favorite.save(vm.newFavorite);
			vm.newFavorite = {};
		};
	};
})();