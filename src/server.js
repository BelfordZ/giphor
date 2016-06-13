var giphor = require('./index');
var restify = require('restify');

function respond(req, res, next) {
  giphor(req.params.query, (err, result) => res.send(200, result || err));
  next();
}

var server = restify.createServer();
server.get('/search/:query', respond);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
