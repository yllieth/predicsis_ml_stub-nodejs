var express = require('express');
var bodyParser = require('body-parser');
var s3 = require('./routes/s3/route_s3');
var s3_download = require('./routes/s3/route_s3_download');

var app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8002');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-from-state,content-type,authorization,cache-control,x-requested-with,x-mock-response');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/upload', s3);
app.use('/download', s3_download);

module.exports = app;
