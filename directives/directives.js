app.directive('searchPlaces', function(listData){
	// Runs during compile
	return {
		
		templateUrl: '../partials/searchPlaces.html',
		link: function (scope, el, attrs) {
			
			listData.success(function(data){
				
				scope.dataList = data;

				console.log(scope.curLocation.cities)

				scope.nearPlaces = {};



				scope.nearPlaces = scope.curLocation.cities;

				console.log(scope.data)


				
				scope.searchCity = function(){

					// var check = scope.curLocation.location;
					
					for(i=0; i<scope.dataList.length; i++){
						
						console.log(scope.dataList[i].location);
						var check2 = scope.dataList[i].location;
						
						

					}
				}



					

			})

		}
	};
});