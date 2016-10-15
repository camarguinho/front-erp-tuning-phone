app.controller('clientsController', function($scope, sharedValues) {
  $scope.module = "Clientes";

  $.getJSON("mocks/clients/clients.json", function(json) {
    $scope.clientsList = json;
  });

});