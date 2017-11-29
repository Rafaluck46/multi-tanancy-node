require('./configs/mongodb');

const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

/*## local modules ##*/
const dbms = require('./middlewares/dbsm');
//models
let Client = require('./models/client');

app.use(bodyParser.json());
app.use(dbms.changedb);

app.get('/save-client', function(req, res){
		
	let client = new Client({ nome: 'Julio', idade:25 });
	client.save(function(err){
		if(err) throw `erro ao salvar cliente`;
		Client.find((err, data) => {
			console.log(data);
			res.send(data);
		});
	});	
		
});

app.listen(3000);

