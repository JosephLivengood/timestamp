//Joseph Livengood

var express = require('express');
var app = express();
var path = require("path");
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var html_dir = './html/';

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', function (req, res) {
  //res.send("TimeStamp Microservice.");
  res.sendfile(html_dir + 'index.html');
});

app.get('/:id', function (req, res) {
  var input = decodeURI(req.params.id);
  var defaultresult = {"unix": null, "natural": null};
  var result = defaultresult;
  if (!isNaN(input)) {
    input = +input * 1000;
  }
  
  var date = new Date(input);
  if (!isNaN(date.valueOf())) {
    result.unix = date.valueOf() / 1000 | 0;
    result.natural =
      months[date.getUTCMonth()] + " " +
      date.getUTCDate() + ", " +
      date.getUTCFullYear();
  }
  
  //usage ?adddays=[number of days to add to the date passed along]
  if (!isNaN(req.query.adddays)) {
    var daysToAdd = req.query.adddays;
    result.unix += 24*60*60*daysToAdd;
    var date = new Date(result.unix * 1000)
    result.natural = 
      months[date.getUTCMonth()] + " " +
      date.getUTCDate() + ", " +
      date.getUTCFullYear();
  }

  res.json(result);
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT +'!');
});