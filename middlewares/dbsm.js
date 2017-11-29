const mongoose = require('mongoose');
const uri = require('./../configs/uri');
const Tenancy = require('./../models/tenancy');



module.exports.changedb = function(req, res, next) {	
	const { headers } = req;

	if(mongoose.connection.db.s.databaseName !== uri.mongo_dbname)
		openUri(uri.mongo_base + uri.mongo_dbname);
	
	Tenancy.findOne({ name: headers.name }, (err, data) => {

		if(err || data == null) 
		 res.status(400).send({
		 	message: `nao foi encontrado o cliente solicitado`, 
		 	data: data,
		 	error: err
		 });
		
		openUri(`${uri.mongo_base}${data.appUrl}`);
		next();
		
	}); 
}

let openUri = (uri) => {
	mongoose.connection.close();
	mongoose.connection.openUri(uri);
}