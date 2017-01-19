var express = require('express')
var app = express()
var path = require('path')
routes = function(req, res){
  res.render('layout');
};


/*app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})*/

app.get('/', routes.index);
app.get('*', routes.index);