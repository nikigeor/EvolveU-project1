var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public')); 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/finish', function(req, res) {
    res.sendFile(path.join(__dirname + '/finish.html'));
});
app.get('/trivia', function(req, res) {
    res.sendFile(path.join(__dirname + '/trivia.html'));
});
var port = 3001; 
app.listen(port);
console.log('server on' + port);