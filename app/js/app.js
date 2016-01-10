angular.module('twitchForce', ['ui.bootstrap', 'filters', 'ngAnimate', 'ngRoute']);

angular.module('filters', [])
.filter('trustUrl', ['$sce', function($sce){
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	};
}]);