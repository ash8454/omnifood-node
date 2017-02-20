const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

console.log("Process PORT is: " + process.env.PORT);
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/omnifood'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index.html');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
