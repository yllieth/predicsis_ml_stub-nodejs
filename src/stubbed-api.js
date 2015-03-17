var express = require('express');
var bodyParser   = require('body-parser');
var users        = require('./routes/api/route_users');
var projects     = require('./routes/api/route_projects');
var datasets     = require('./routes/api/route_datasets');
var dictionaries = require('./routes/api/route_dictionaries');
var models       = require('./routes/api/route_models');
var jobs         = require('./routes/api/route_jobs');
var sources      = require('./routes/api/route_sources');
var modalities_sets = require('./routes/api/route_modalities_sets');
var preparation_rules_sets = require('./routes/api/route_preparation_rules_sets');
var reports = require('./routes/api/route_reports');

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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-from-state,content-type,authorization,cache-control,x-requested-with,x-mock-response,x-body-sent');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
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

module.exports = app;
