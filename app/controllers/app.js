var app = angular.module('app',['ngRoute', 'angularUtils.directives.dirPagination']);

app.config(function($routeProvider)
{
   $routeProvider

   .when('/', {
      templateUrl : 'views/home.html',
      controller : "",  
   })

   .when('/clients', {
      templateUrl : 'views/clients/clients.html',
      controller : "clientsController",  
   })

   .when('/client', {
      templateUrl : 'views/clients/client.html',
      controller : "clientsController",  
   })

   .when('/client-details', {
      templateUrl : 'views/clients/client-details.html',
      controller : "clientsController",  
   })

   .when('/clients-data', {
      templateUrl : 'views/clients/client.html',
      controller : "clientsController",  
   })

   .when('/clients-document', {
      templateUrl : 'views/clients/client.html',
      controller : "clientsController",  
   })

   .when('/clients-address', {
      templateUrl : 'views/clients/client.html',
      controller : "clientsController",  
   })

   .when('/clients-contact', {
      templateUrl : 'views/clients/client.html',
      controller : "clientsController",  
   })

   .when('/appleProducts', {
      templateUrl : 'views/products/appleProducts.html',
      controller : "productsController",  
   })

   .when('/covers', {
      templateUrl : 'views/products/covers.html',
      controller : "productsController",  
   })

   .when('/films', {
      templateUrl : 'views/products/films.html',
      controller : "productsController",  
   })

   .when('/product', {
      templateUrl : 'views/products/product.html',
      controller : "productsController",  
   })

   .when('/supplier', {
      templateUrl : 'views/suppliers/supplier.html',
      controller : "suppliersController",  
   })

   .when('/suppliers', {
      templateUrl : 'views/suppliers/suppliers.html',
      controller : "suppliersController",  
   })

   .when('/supplier-details', {
      templateUrl : 'views/suppliers/supplier-details.html',
      controller : "suppliersController",  
   })

   .when('/suppliers-data', {
      templateUrl : 'views/suppliers/supplier.html',
      controller : "suppliersController",  
   })

   .when('/suppliers-document', {
      templateUrl : 'views/suppliers/supplier.html',
      controller : "suppliersController",  
   })

   .when('/suppliers-address', {
      templateUrl : 'views/suppliers/supplier.html',
      controller : "suppliersController",  
   })

   .when('/suppliers-contact', {
      templateUrl : 'views/suppliers/supplier.html',
      controller : "suppliersController",  
   })

   .when('/reportsAndCharts', {
      templateUrl : 'views/reports/general.html',
      controller : "reportsAndChartsController",  
   })

   .when('/tracking', {
      templateUrl : 'views/tracking/tracking.html',
      controller : "trackingController",  
   })
 
   .otherwise ({ redirectTo: '/' });
});



