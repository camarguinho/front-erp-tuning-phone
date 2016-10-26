app.controller('productsController', function($scope, $location, $http, sharedValues) {
  $scope.module = "Estoque";
  $scope.product = sharedValues.getObject();

  $.getJSON("mocks/appleProducts/products.json", function(json) {
    $scope.appleProductsList = json;
  });

  $.getJSON("mocks/covers/products.json", function(json) {
    $scope.coversProductsList = json;
  });

  $.getJSON("mocks/films/products.json", function(json) {
    $scope.filmsProductsList = json;
  });

  $scope.new = function(){
    sharedValues.setObject(null);
    sharedValues.setOperation("new");
    $location.path("/product");
  };

  $scope.edit = function(val){
    $scope.product = val;
    sharedValues.setOperation("edit");
    sharedValues.setObject($scope.product);
    $location.path("/product");
  };

  $scope.read = function(val){
    $scope.product = val;
    sharedValues.setOperation("read");
    sharedValues.setObject($scope.product);
    $location.path("/product");
  };

  $scope.remove = function(val) {
    $scope.product = val;
    if($scope.product != null && $scope.product.product_type != null){
      if($scope.product.product_type.name == "PRODUTOS APPLE"){
        $scope.appleProductsList.splice($scope.appleProductsList.indexOf(val),1);
      }
      if($scope.product.product_type.name == "COVERS"){
        $scope.coversProductsList.splice($scope.coversProductsList.indexOf(val),1);
      }
      if($scope.product.product_type.name == "FILMS"){
        $scope.filmsProductsList.splice($scope.filmsProductsList.indexOf(val),1);
      }
    }
  };

  $scope.return = function() {
    if($scope.product != null && $scope.product.product_type != null){
      if($scope.product.product_type.name == "PRODUTOS APPLE"){
        $location.path("appleProducts");
      }
      if($scope.product.product_type.name == "COVERS"){
        $location.path("covers");
      }
      if($scope.product.product_type.name == "FILMS"){
        $location.path("films");
      }
    } else {
      $location.path("/");
    }
  };


});