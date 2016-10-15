app.controller('trackingController', function($scope) {
   $scope.module = "Rastreio de Objetos";

   $.getJSON("mocks/tracking/screenings.json", function(json) {
     $scope.trackingList = json;
   });

});