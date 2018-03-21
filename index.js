var http = require('http');
var fs = require('fs');
var Mime = require('mime');
var extract = require('./extract');
var wss = require('./websockets-server');
var handleError = function(err, res) {
  fs.readFile('app/error.html', function(err, data) {
    res.end(data);
  });
  //res.writeHead(404);
  //res.end();
};
var server = http.createServer(function(req, res) {
  console.log('Responding to a request.');
  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      //res.setHeader('Content-Type', 'text/html');
      const contentType = Mime.getType(filePath);
      res.writeHead(200, {"Content-Type": contentType});
      res.end(data);
    }
  });
});
/*var server = http.createServer(function(req, res) {
  console.log('Responding to a request.');
  fs.readFile('app/test.txt', function(err, data) {
    const contentType = Mime.getType('app/test.txt');
    //console.log(Mime.getType('app/test.txt'));
    res.writeHead(200, {"Content-Type": contentType});
    res.end(data);
  });
});*/
server.listen(3000);
