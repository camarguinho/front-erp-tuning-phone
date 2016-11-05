app.controller('salesController', function($scope, $location, sharedValues) {
   $scope.module = "Vendas";
   $scope.sale = sharedValues.getObject();

  $.getJSON("mocks/sales/sales.json", function(json) {
    $scope.salesList = json;
  });

  $scope.new = function(){
    sharedValues.setObject(null);
    $location.path("sale");
  };

  $scope.edit = function(val){
  	 $scope.sale = val;
  	 sharedValues.setObject($scope.sale);
     $scope.products = $scope.sale.products;
  	 $location.path("sale");
  };

  $scope.read = function(val){
  	$scope.sale = val;
  	sharedValues.setObject($scope.sale);
    $location.path("sales-details");
  };

  $scope.remove = function(val) {
    $scope.salesList.splice($scope.salesList.indexOf(val),1);
  };

  $scope.return = function(){
    $location.path("sales");
  }


});