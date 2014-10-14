var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var appName='A Cool App';
var libraries = [
	'Express',
	'Angular',
	'jQuery',
	'Backbone'
];

app.get('/', function(req, res) {
	res.render('index', {
		title: appName,
		libraries: libraries
	});
});

app.get('/about', function(req, res) {
	res.render('about');
});

var server = app.listen(6048, function() {
	console.log('Express server listening on port ' + server.address().port);
});
