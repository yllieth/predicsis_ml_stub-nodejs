var fs = require('fs');
var chalk = require('chalk');
var express = require('express');
var proxyOAuth = require('./routes/oauth/route_proxy_oauth.js');

var app = express();

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.PREDICSIS_STUBAPI_ORIGINS || 'http://localhost:8002');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', process.env.PREDICSIS_STUBAPI_METHODS || 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', process.env.PREDICSIS_STUBAPI_HEADERS || 'x-from-state,content-type,authorization,cache-control,x-requested-with,x-mock-response,x-body-sent');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', process.env.PREDICSIS_STUBAPI_CREDENTIALS || true);

  // Pass to next layer of middleware
  next();
});

app.use(function(req, res, next) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/assets/index_idproxy.html').pipe(res);
  } else {
    next();
  }
});

// Console output
app.use(function(req, res, next) {
  if (req.method !== 'OPTIONS') {
    if      (req.method === 'GET')    { console.log('>    ' + chalk.green(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'POST')   { console.log('>   ' + chalk.blue(req.method)   + ' ' + req.originalUrl); }
    else if (req.method === 'PATCH')  { console.log('>  ' + chalk.magenta(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'DELETE') { console.log('> ' + chalk.grey(req.method)     + ' ' + req.originalUrl); }
    else                              { console.log('> ' + req.method + ' ' + req.originalUrl); }
  }

  next();
});

app.use('/oauth', proxyOAuth);

module.exports = app;
