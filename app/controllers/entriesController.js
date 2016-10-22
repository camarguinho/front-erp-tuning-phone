app.controller('entriesController', function($scope, $location, sharedValues) {
   $scope.module = "Vendas";
   $scope.operation = sharedValues.getOperation();
   $scope.product = sharedValues.getObject();
   $scope.isDisabled = false;

   $scope.return = function(){
	if($scope.product != null && $scope.product.product_type != null){
      if($scope.product.product_type.name == "PRODUTOS APPLE"){
        $location.path("stocks/appleProducts");
      }
      if($scope.product.product_type.name == "COVERS"){
        $location.path("stocks/covers");
      }
      if($scope.product.product_type.name == "FILMS"){
        $location.path("stocks/films");
      }
    } else {
      $location.path("/");
    }
   };

});