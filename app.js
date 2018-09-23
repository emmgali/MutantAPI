var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

var mutantLogic = require("./mutantLogic.js");

/*
const { Pool } = require('pg');
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: true
});
*/

/*
app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
})
*/

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

app.get('/intro', function(req, res){
	res.send('Hola Martin! Gracias por usar esta aplicación!');	
})