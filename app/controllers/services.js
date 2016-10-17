app.service('sharedValues', function() {
   var list;
   var object;
   var authenticated;

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
	   }
   }
});