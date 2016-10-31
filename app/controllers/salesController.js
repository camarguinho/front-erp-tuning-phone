app.controller('salesController', function($scope, $location, sharedValues) {
   $scope.module = "Vendas";

   $.getJSON("mocks/sales/sales.json", function(json) {
    $scope.salesList = json;
   });

   $scope.edit = function(val){
  	 $scope.client = val;
  	 sharedValues.setObject($scope.client);
  	 $location.path("sales");
   };

  $scope.read = function(val){
  	$scope.client = val;
  	sharedValues.setObject($scope.client);
    $location.path("sales-details");
  };

  $scope.remove = function(val) {
    $scope.salesList.splice($scope.salesList.indexOf(val),1);
  };

  $scope.return = function(){
    $location.path("sales");
  }

});