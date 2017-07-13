var http = require('http');
var dd = require('./datario');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Ciao Mondo Oggi !');
	res.write("The date and time are currently: " + dd.myDateTime());
	res.end();
}).listen(8080); 