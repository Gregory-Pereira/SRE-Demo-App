const path = require('path')
const express = require('express');
const parser = require('body-parser');

let app = express();
app.set('port', 3000);

app.use(parser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  console.log('welcome to the root');
  res.send('welcome to the root');
});


app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number', app.get('port'));
})

