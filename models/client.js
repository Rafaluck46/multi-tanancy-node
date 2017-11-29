const mongoose = require('mongoose');

module.exports = mongoose.model('clients',{
	nome: String,
	idade: Number
});

