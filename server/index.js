var Express = require('express');
var app = Express();

var port = 5000;

app.use('/', Express.static('public', {index: 'index.html'}));

app.listen(port);