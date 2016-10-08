app.controller('listController',['$scope','listData','$http','$routeParams', function($scope,listData,$http,$routeParams){
	
	listData.success(function(data){
		$scope.data=data;
	})

}])



app.controller('detailsController',['$scope','listData','nearPlaces','$http','$routeParams', function($scope,listData,nearPlaces,$http,$routeParams, uiGmapGoogleMapApi){
	
	listData.success(function(data){
		$scope.data=data;
		$scope.id= $routeParams.param;

		var index=0;

		for(i in $scope.data){
			if($scope.data[i].pk == $scope.id){
				index = i
				break;
			}
			
		}

		// defining current location
		$scope.curLocation = {};

		$scope.curLocation = $scope.data[index]


		$scope.latVal = $scope.curLocation.latitude;
		$scope.longVal = $scope.curLocation.longitude;


		var mapOptions = {
	        zoom: 4,
	        center: new google.maps.LatLng($scope.latVal, $scope.longVal),
	        mapTypeId: google.maps.MapTypeId.TERRAIN,

	    }
     

    	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);




		$scope.changeValue = function(latVal, longVal){1
			$scope.latVal = latVal;
			$scope.longVal = longVal;

			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng($scope.latVal, $scope.longVal),
				mapTypeId: google.maps.MapTypeId.TERRAIN,
			}

			var myLatLng = {lat: $scope.latVal, lng: $scope.longVal};

	     	

	    	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	    	var marker = new google.maps.Marker({
	            map: $scope.map,
	            position: new google.maps.LatLng($scope.latVal, $scope.longVal),
	            title: info.city
	        });


		}



		

		
	})


	


}])

