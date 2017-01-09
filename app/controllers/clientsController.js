app.controller('clientsController', function($scope, $location, $http, sharedValues) {
  $scope.module = "Clientes";
  $scope.client = sharedValues.getObject();

  // $.getJSON("mocks/clients/clients.json", function(json) {
  //   $scope.clientsList = json;
  // });

    $http({
        method : "GET",
        url : "http://localhost:8080/api/clients"
    }).then(function mySucces(response) {
        $scope.clientsList = response.data;
        console.log("Sucesso!");
    }, function myError(response) {
        console.log("Erro!");
    });

  $scope.new = function(){
    sharedValues.setObject(null);
    $location.path("client");
  };

  $scope.edit = function(val){
  	$scope.client = val;
  	sharedValues.setObject($scope.client);
  	$location.path("client");
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
  };

});