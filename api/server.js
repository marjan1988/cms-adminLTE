const express 	 = require('express');
const server	 = express();
const cors 	     = require('cors');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const PORT       = require('./config').PORT;

exports.server = server


exports.init = function(){
	
	return new Promise(function(resolve, reject){
	
		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({extended:true}));
		server.use(cors());
		server.use('/uploads',serveIndex('./uploads', {'icons': true}));
       	server.use('/uploads', express.static('./uploads'));

		server.listen(PORT, function(){

			console.log('Server started and listen on port 3030');
			resolve();
		});
	
	});

};