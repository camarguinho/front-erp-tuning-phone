app.controller('clientsController', function($scope, $location, sharedValues) {
  $scope.module = "Clientes";
  $scope.client = sharedValues.getObject();

  $.getJSON("mocks/clients/clients.json", function(json) {
    $scope.clientsList = json;
  });

  $scope.edit = function(val){
  	$scope.client = val;
  	sharedValues.setObject($scope.client);
  	$location.path("entries/clients");
  };

  $scope.read = function(val){
  	$scope.client = val;
  	sharedValues.setObject($scope.client);
    $location.path("client-details");
  };

  $scope.remove = function(val) {
    $scope.clientsList.splice($scope.clientsList.indexOf(val),1);
  };

  $scope.return = function(){
    $location.path("clients");
  }

});