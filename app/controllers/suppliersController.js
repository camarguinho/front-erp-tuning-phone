app.controller('suppliersController', function($scope, $location, $http, sharedValues) {
  $scope.module = "Fornecedores";
  $scope.supplier = sharedValues.getObject();

  // $.getJSON("mocks/suppliers/suppliers.json", function(json) {
  //   $scope.suppliersList = json;
  // });

  $http({
        method : "GET",
        url : "http://localhost:8080/api/suppliers"
    }).then(function mySucces(response) {
        $scope.suppliersList = response.data;
        console.log("Sucesso!");
    }, function myError(response) {
        console.log("Erro!");
  });

  $scope.new = function(){
    sharedValues.setObject(null);
    $location.path("supplier");
  };

  $scope.edit = function(val){
  	$scope.supplier = val;
  	sharedValues.setObject($scope.supplier);
  	$location.path("supplier");
  };

  $scope.read = function(val){
  	$scope.supplier = val;
  	sharedValues.setObject($scope.supplier);
    $location.path("supplier-details");
  };

  $scope.remove = function(val) {
    $scope.suppliersList.splice($scope.suppliersList.indexOf(val),1);
  };

  $scope.return = function(){
    $location.path("suppliers");
  }

});