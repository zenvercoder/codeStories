//var env = require('dotenv');
var Express = require('express');
var app = Express();

var port = process.env.PORT;

app.use('/', Express.static('public', {index: 'index.html'}));

app.listen(port);   