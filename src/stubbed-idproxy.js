var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var proxyOAuth = require('./routes/oauth/route_proxy_oauth.js');
var publicDir = path.resolve(__dirname, '../..');
var url = require('url');

var nopt = require('nopt');
var config = nopt({ coverage: Boolean });
var coverage = require('istanbul-middleware');
var needCover = config.coverage;


var app = express();

function matcher(req) {
    var parsed = url.parse(req.url);
    return parsed.pathname && parsed.pathname.match(/\.js$/) && !parsed.pathname.match(/vendor/) && !parsed.pathname.match(/locales/);
}

if (needCover) {
    console.log('Turning on coverage; ensure this is not production');
    coverage.hookLoader(function(filePath){return false;});
}
if (!needCover) {
    console.log('Coverage NOT turned on, run with --coverage to turn it on');
}

app.use(function(req, res, next) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/assets/index_idproxy.html').pipe(res);
  } else {
    next();
  }
});

app.use('/oauth', proxyOAuth);

if (needCover) {
    console.log('Turn on coverage reporting at /coverage');
    app.use('/coverage', coverage.createHandler({ verbose: true, resetOnGet: true }));
    app.use(coverage.createClientHandler(publicDir, { matcher: matcher }));
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(publicDir));

module.exports = app;
