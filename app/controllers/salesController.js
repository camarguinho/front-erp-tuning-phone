app.controller('salesController', function($scope, $location, sharedValues) {
  $scope.module = "Vendas";
  $scope.sale = sharedValues.getObject();
  $scope.products = sharedValues.getProducts();
  $scope.clients = sharedValues.getClients();

  $.getJSON("mocks/sales/sales.json", function(json) {
    $scope.salesList = json;
  });

  $scope.new = function(){
    sharedValues.setObject(null);
    $scope.getAllProducts();
    $scope.getAllClients();
    $location.path("sale");
  };

  $scope.edit = function(val){
  	 $scope.sale = val;
  	 sharedValues.setObject($scope.sale);
     sharedValues.setProducts($scope.sale.products);
     $scope.setClient($scope.sale.client);
  	 $location.path("sale");
  };

  $scope.read = function(val){
  	$scope.sale = val;
  	sharedValues.setObject($scope.sale);
    sharedValues.setProducts($scope.sale.products);
    $scope.setClient($scope.sale.client);
    $location.path("sales-details");
  };

  $scope.remove = function(val) {
    $scope.salesList.splice($scope.salesList.indexOf(val),1);
  };

  $scope.return = function(){
    sharedValues.setObject(null);
    $location.path("sales");
  };

  $scope.getAllProducts = function(){
    $scope.products = [];
    $.getJSON("mocks/films/products.json", function(json) {
      angular.forEach(json, function(value, key) {
        $scope.products.push(value);
      });
    });

    $.getJSON("mocks/covers/products.json", function(json) {
       angular.forEach(json, function(value, key) {
        $scope.products.push(value);
      });
    });

    $.getJSON("mocks/appleProducts/products.json", function(json) {
      angular.forEach(json, function(value, key) {
        $scope.products.push(value);
      });
    });

    sharedValues.setProducts($scope.products);
  };

  $scope.getAllClients = function(){
    $scope.clients = [];
    $.getJSON("mocks/clients/clients.json", function(json) {
      angular.forEach(json, function(value, key) {
        $scope.clients.push(value);
      });
    });

    sharedValues.setClients($scope.clients);
  };

  $scope.setClient = function(val){
    $scope.clients = [];
    $scope.clients.push(val);
    sharedValues.setClients($scope.clients);
  };

});