app.controller('loginController', function($scope, $location, sharedValues) {
	$scope.user = null;
	$scope.password = null;
	$scope.authenticated = false;

	$scope.login = function(){
		if($scope.user != 'admin' || $scope.password != 1234){
			$scope.authenticated = false;
		} else {
			$scope.authenticated = true;
		}
		sharedValues.setAuthenticated($scope.authenticated);
		$location.path("/");
	};
	
});