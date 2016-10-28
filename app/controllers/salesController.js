app.controller('salesController', function($scope) {
   $scope.module = "Vendas";

   $.getJSON("mocks/sales/sales.json", function(json) {
    $scope.salesList = json;
   });

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
    $scope.salesList.splice($scope.salesList.indexOf(val),1);
  };

});