app.controller('clientsController', function($scope) {
  $scope.module = "Clientes";

  $.getJSON("mocks/clients/clients.json", function(json) {
    $scope.clientsList = json;
  });

});