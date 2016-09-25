var app = angular.module('erpApp',['ngRoute']);

app.controller('erpController', function($scope) {
   $scope.company = "TUNING-PHONE";
   $scope.module = "Controle";
});

app.config(function($routeProvider)
{
   $routeProvider
 
   .when('/films', {
      templateUrl : 'views/stocks/films.html',
      controller : "erpController",  
   })

   .when('/covers', {
      templateUrl : 'views/stocks/covers.html',
      controller : "erpController",  
   })

   .when('/appleProducts', {
      templateUrl : 'views/stocks/appleProducts.html',
      controller : "erpController",  
   })

   .when('/reports', {
      templateUrl : 'views/reports/general.html',
      controller : "erpController",  
   })
 
   .otherwise ({ redirectTo: '/' });
});


