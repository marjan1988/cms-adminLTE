const server = require('../../server').server;

module.exports = function(){
	
	server.get('/articles', function(req, res){
		
		res.send('Articles all is well');
		
	});
	
};