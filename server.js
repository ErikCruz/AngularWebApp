var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
   res.sendFile(__dirname + '/public/main.html'); 
});

app.listen(process.env.PORT);