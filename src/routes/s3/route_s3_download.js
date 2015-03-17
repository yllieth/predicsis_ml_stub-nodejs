var express = require('express');
var router = express.Router();
var fs = require('fs');

var testCsvFile = fs.readFileSync(__dirname + '/../../assets/goodexample.csv');

router.get('/file/from/s3/learning-dataset.csv', function(req, res) {
  setTimeout(function() {
        res.set('Content-Type', 'multipart/form-data');
        res.status(200).send(testCsvFile);
    }, 1000);
});

router.get('/file/from/s3/example2.csv', function(req, res) {
  setTimeout(function() {
        res.set('Content-Type', 'multipart/form-data');
        res.status(200).send(testCsvFile);
    }, 1000);
});

router.get('/file/from/s3/scoreset-output.csv', function(req, res) {
  setTimeout(function() {
        res.set('Content-Type', 'multipart/form-data');
        res.status(200).send(testCsvFile);
    }, 1000);
});

module.exports = router;
