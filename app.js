var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

var mutantLogic = require("./mutantLogic.js");

app.post('/mutant/', function (req, res) {

//console.log("el body es:")
//console.log(req.body);

  if(mutantLogic.detectMutant(req.body.dna)){
  	res.sendStatus(200);
  }else{
  	res.sendStatus(403);
  }

})

app.listen(PORT, function(){
	console.log('App escuchando! Envie mutantes!');
})

app.get('/hola', function(req, res){
	res.send('que tal?');	
})