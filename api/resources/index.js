module.exports = function(){
	
	require('./articles/model');
	require('./articles/routes')();
	
	require('./project/model');
    require('./project/routes')();
};