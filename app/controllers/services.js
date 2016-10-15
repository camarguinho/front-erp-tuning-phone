app.service('sharedValues', function() {
   var list;
   var object;

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
	   }
   }
});