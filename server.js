var express = require('express');
var app = express();
var path = require('path');

app.use('/js', express.static('js'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1234);