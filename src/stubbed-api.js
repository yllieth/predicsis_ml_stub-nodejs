var express = require('express');
var bodyParser   = require('body-parser');
var fs           = require('fs');
var chalk        = require('chalk');
var users        = require('./routes/api/route_users');
var projects     = require('./routes/api/route_projects');
var datasets     = require('./routes/api/route_datasets');
var dictionaries = require('./routes/api/route_dictionaries');
var models       = require('./routes/api/route_models');
var jobs         = require('./routes/api/route_jobs');
var sources      = require('./routes/api/route_sources');
var modalities_sets = require('./routes/api/route_modalities_sets');
var preparation_rules_sets = require('./routes/api/route_preparation_rules_sets');
var reports      = require('./routes/api/route_reports');
var settings     = require('./routes/api/route_settings');

var app = express();

function parseBody(req, next) {
    try {
      req.body = JSON.parse(req.body);
    }
    catch (err) {
      //do nothing
    }
    next();
}

//app.use(bodyParser.json());
//Hack for PhantomJS (PhantomJS seems to not send content-length and content-type headers)
app.use(function(req, res, next) {

    if(req.headers['x-body-sent']) {
        req.body = req.headers['x-body-sent'];
        parseBody(req, next);
    } else {
        req.body = '';
        req.on('data', function (chunk) {
            req.body += chunk.toString();
        });
        req.on('end', function () {
            parseBody(req, next);
        });
    }

});

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
    fs.createReadStream(__dirname + '/assets/index_api.html').pipe(res);
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

app.use(function(req, res, next) {
  if (req.method !== 'OPTIONS' && req.headers.authorization === 'Bearer no-token-defined') {
    res.status(401).send({
      status: 401,
      message: "Invalid token"
    })
  } else {
    next();
  }
});

app.use('/users', users);
app.use('/projects', projects);
app.use('/datasets', datasets);
app.use('/dictionaries', dictionaries);
app.use('/jobs', jobs);
app.use('/modalities_sets', modalities_sets);
app.use('/preparation_rules_sets', preparation_rules_sets);
app.use('/sources', sources);
app.use('/models', models);
app.use('/reports', reports);
app.use('/settings', settings);

module.exports = app;
