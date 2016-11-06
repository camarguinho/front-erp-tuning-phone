app.service('sharedValues', function() {
   var list;
   var object;
   var authenticated;
   var operation;

   /*temp*/
   var clients;
   var products;

   return {
   	   setList : function(val){
	      list = val;
	   },
	   getList : function(){
	      return list;
	   },

	   setObject : function(val){
	   	   object = val;
	   },
	   getObject : function(){
	   	return object;
	   },

	   setAuthenticated : function(val){
	   		authenticated = val;
	   },
	   getAuthenticated : function(){
	   		return authenticated;
	   },

	   setOperation : function(val){
	   		operation = val;
	   },
	   getOperation : function(){
	   		return operation;
	   },


	   /*temp*/
	   setClients : function(val){
	   		clients = val;
	   },
	   getClients : function(){
	   		return clients;
	   },

	   setProducts : function(val){
	   		products = val;
	   },
	   getProducts : function(){
	   		return products;
	   }
   }
});