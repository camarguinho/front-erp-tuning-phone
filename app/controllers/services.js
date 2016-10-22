app.service('sharedValues', function() {
   var list;
   var object;
   var authenticated;
   var operation;

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
	   }
   }
});