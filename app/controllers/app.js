var app = angular.module('app',['ngRoute']);

app.controller('erpController', function($scope) {
   $scope.company = "TUNING-PHONE";
});

app.config(function($routeProvider)
{
   $routeProvider

   .when('/', {
      templateUrl : 'views/home.html',
      controller : "erpController",  
   })

   .when('/entries/products', {
      templateUrl : 'views/entries/products.html',
      controller : "entriesController",  
   })

   .when('/entries/suppliers', {
      templateUrl : 'views/entries/suppliers.html',
      controller : "entriesController",  
   })

         .when('/suppliers-data', {
            templateUrl : 'views/entries/suppliers.html',
            controller : "entriesController",  
         })

         .when('/suppliers-document', {
            templateUrl : 'views/entries/suppliers.html',
            controller : "entriesController",  
         })

         .when('/suppliers-address', {
            templateUrl : 'views/entries/suppliers.html',
            controller : "entriesController",  
         })

         .when('/suppliers-contact', {
            templateUrl : 'views/entries/suppliers.html',
            controller : "entriesController",  
         })


   .when('/entries/clients', {
      templateUrl : 'views/entries/clients.html',
      controller : "entriesController",  
   })

            .when('/clients-data', {
               templateUrl : 'views/entries/clients.html',
               controller : "entriesController",  
            })

            .when('/clients-document', {
               templateUrl : 'views/entries/clients.html',
               controller : "entriesController",  
            })

            .when('/clients-address', {
               templateUrl : 'views/entries/clients.html',
               controller : "entriesController",  
            })

            .when('/clients-contact', {
               templateUrl : 'views/entries/clients.html',
               controller : "entriesController",  
            })
 
   .when('/stocks/films', {
      templateUrl : 'views/stocks/films.html',
      controller : "stocksController",  
   })

   .when('/stocks/covers', {
      templateUrl : 'views/stocks/covers.html',
      controller : "stocksController",  
   })

   .when('/stocks/appleProducts', {
      templateUrl : 'views/stocks/appleProducts.html',
      controller : "stocksController",  
   })

   .when('/clients', {
      templateUrl : 'views/clients/clients.html',
      controller : "clientsController",  
   })

   .when('/client-details', {
      templateUrl : 'views/clients/client-details.html',
      controller : "clientsController",  
   })

   .when('/reports', {
      templateUrl : 'views/reports/general.html',
      controller : "reportsController",  
   })
 
   .otherwise ({ redirectTo: '/' });
});


