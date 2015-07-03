var express = require('express');
var api = require('./api');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/api', api);

app.get('*', function(req, res){
   res.sendFile(__dirname + '/public/main.html'); 
});

app.listen(process.env.PORT);