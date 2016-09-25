var app = angular.module('erpApp',['ngRoute']);

app.controller('erpController', function($scope) {
   $scope.company = "TUNING-PHONE";
   $scope.module = "Controle";
});

app.config(function($routeProvider)
{
   $routeProvider

   .when('/entries/products', {
      templateUrl : 'views/entries/products.html',
      controller : "erpController",  
   })

   .when('/entries/suppliers', {
      templateUrl : 'views/entries/suppliers.html',
      controller : "erpController",  
   })
 
   .when('/stocks/films', {
      templateUrl : 'views/stocks/films.html',
      controller : "erpController",  
   })

   .when('/stocks/covers', {
      templateUrl : 'views/stocks/covers.html',
      controller : "erpController",  
   })

   .when('/stocks/appleProducts', {
      templateUrl : 'views/stocks/appleProducts.html',
      controller : "erpController",  
   })

   .when('/clients', {
      templateUrl : 'views/clients/clients.html',
      controller : "erpController",  
   })

   .when('/clients', {
      templateUrl : 'views/clients/clients.html',
      controller : "erpController",  
   })

   .when('/client-details', {
      templateUrl : 'views/clients/client-details.html',
      controller : "erpController",  
   })
 
   .otherwise ({ redirectTo: '/' });
});


