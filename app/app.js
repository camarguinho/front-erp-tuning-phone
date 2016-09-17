var app = angular.module('erpApp',['ngRoute']);

app.controller('erpController', function($scope) {
   $scope.company = "TUNING-PHONE";
});

app.config(function($routeProvider)
{
   $routeProvider
 
   .when('/peliculas', {
      templateUrl : 'views/estoques/peliculas.html',
      controller : "erpController",  
   })

   .when('/capas', {
      templateUrl : 'views/estoques/capas.html',
      controller : "erpController",  
   })

   .when('/produtosApple', {
      templateUrl : 'views/estoques/produtosApple.html',
      controller : "erpController",  
   })
 
   .otherwise ({ redirectTo: '/' });
});


