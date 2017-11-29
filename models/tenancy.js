const mongoose = require('mongoose');

module.exports = mongoose.model('tenancies',{
	name: String,
	appUrl: String
});
