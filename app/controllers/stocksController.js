app.controller('stocksController', function($scope, $http) {
  $scope.module = "Estoque";


  $.getJSON("mocks/appleProducts/products.json", function(json) {
    $scope.appleProductsList = json;
  });

  $.getJSON("mocks/covers/products.json", function(json) {
    $scope.coversProductsList = json;
  });

  $.getJSON("mocks/films/products.json", function(json) {
    $scope.filmsProductsList = json;
  });


});