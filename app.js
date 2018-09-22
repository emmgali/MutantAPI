var express = require('express');
var app = express();

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

app.listen(3000, function(){
	console.log('App escuchando!');
})

app.get('/hola', function(req, res){
	res.send('que tal?');	
})