//Joseph Livengood

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //var query = req.query
  res.send('TimeStamp Microservice');
});

app.get('/:id', function (req, res) {
  var ui = req.params.id;
  res.send('hello' + ui);
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT +'!');
});