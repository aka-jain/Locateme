// API call service
app.factory('listData', ['$http', function ($http) {
	
	// dummny JSON
	return $http.get('../data/list.json').success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);



// API call service near places
app.factory('nearPlaces', ['$http', function ($http) {
	
	
	return $http.get('https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json').success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);