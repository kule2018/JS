
var express = require('express');

var app = express();

var router = require('./contorller/roter.js');

//静态化
app.use(express.static('public'));


app.get('/',function ( req,res ) {
	
	res.send('123');
	
});

app.get('/add',function (req,res,next) {
	
	res.sendFile(__dirname + '/public/add.html');
	
});

app.listen('80');

console.log('启动成功');
