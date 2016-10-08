var app = angular.module('locate', ['ngRoute']);


// provideing url for views
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/location/:param', {
		templateUrl: 'views/details.html'
	}).
	otherwise({
		templateUrl: 'views/list.html'
		
	});

}])