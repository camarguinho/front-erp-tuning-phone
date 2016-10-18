app.controller('erpController', function($scope, $location, sharedValues) {
	$scope.user = null;
	$scope.password = null;
	$scope.authenticated = sharedValues.getAuthenticated();

	$scope.login = function(){
		if($scope.user != 'admin' || $scope.password != 1234){
			$scope.authenticated = false;
		} else {
			$scope.authenticated = true;
		}
		sharedValues.setAuthenticated($scope.authenticated);
		$location.path("/");
	};

	$scope.logoff = function(){
		$scope.user = null;
		$scope.password = null;
		$scope.authenticated = false;
		$location.path("/");
	};

	$scope.goToClientsList = function(){
		$location.path("clients");
	};

	$scope.goToFilmsList = function(){
		$location.path("stocks/films");
	};

	$scope.goToCoversList = function(){
		$location.path("stocks/covers");
	};

	$scope.goToAppleProductsList = function(){
		$location.path("stocks/appleProducts");
	};

	$scope.goToSuppliersCRUD = function(){
		$location.path("entries/suppliers");
	};

	$scope.goToProductsCRUD = function(){
		$location.path("entries/products");
	};

	$scope.goToClientsCRUD = function(){
		$location.path("entries/clients");
	};

	$scope.goToTracking = function(){
		$location.path("tracking/clients");
	};

	$scope.goToReports = function(){
		$location.path("reports");
	};

	sharedValues.setAuthenticated($scope.authenticated);

});