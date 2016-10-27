app.controller('suppliersController', function($scope, $location, sharedValues) {
  $scope.module = "Fornecedores";
  $scope.supplier = sharedValues.getObject();

  $.getJSON("mocks/suppliers/suppliers.json", function(json) {
    $scope.suppiersList = json;
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
    $scope.suppiersList.splice($scope.suppiersList.indexOf(val),1);
  };

  $scope.return = function(){
    $location.path("suppliers");
  }

});