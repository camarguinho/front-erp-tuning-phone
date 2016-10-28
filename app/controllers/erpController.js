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

	$scope.goToClients = function(){
		$location.path("clients");
	};

	$scope.goToAppleProducts = function(){
		$location.path("appleProducts");
	};

	$scope.goToCovers = function(){
		$location.path("covers");
	};

	$scope.goToFilms = function(){
		$location.path("films");
	};

	$scope.goToSuppliers = function(){
		$location.path("suppliers");
	};

	$scope.goToReportsAndCharts = function(){
		$location.path("reportsAndCharts");
	};

	$scope.goToTracking = function(){
		$location.path("tracking");
	};

	sharedValues.setAuthenticated($scope.authenticated);

});