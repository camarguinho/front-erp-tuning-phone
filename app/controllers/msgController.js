app.controller('msgController', function($scope, sharedValues) {
  $scope.module = "Mensagens";

  $.getJSON("mocks/messages/messages.json", function(json) {
    $scope.messageList = json;
  });

});