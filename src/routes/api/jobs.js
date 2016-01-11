/**
 * Stub of /jobs/...
 */

var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {

  if (req.headers['x-mock-response'] === 'bad' || req.params.id === 'fail') {
    setTimeout(function() {
      res.status(200).json({job: {
        'id': '53c7ded570632d3417050000',
        'created_at': '2014-05-02T15:42:51.687Z',
        'finished_at': '2014-05-02T15:52:51.687Z',
        'action': 'Generate dictionary',
        'user_id': '5363b25c687964476d000000',
        'status': 'failed',
        'errors': [{
          'message': 'An internal server error occured',
          'status': 500
        }],
        'runnable_id': '5363b7fc6879644ae7010000'
      }});
    }, 600);
  } else if (req.headers['x-mock-response'] === 'processing') {
    setTimeout(function() {
      res.status(200).json({job: {
        'id': '53c7ded570632d3417050000',
        'created_at': '2014-05-02T15:42:51.687Z',
        'finished_at': '2014-05-02T15:52:51.687Z',
        'action': 'Generate dictionary',
        'user_id': '5363b25c687964476d000000',
        'status': 'processing',
        'errors': [],
        'runnable_id': '5363b7fc6879644ae7010000'
      }});
    }, 600);
  } else {
    setTimeout(function() {
      res.status(200).json({job: {
        'id': '53c7ded570632d3417050000',
        'created_at': '2014-05-02T15:42:51.687Z',
        'finished_at': '2014-05-02T15:52:51.687Z',
        'action': 'Generate dictionary',
        'user_id': '5363b25c687964476d000000',
        'status': 'completed',
        'errors': [],
        'runnable_id': '5363b7fc6879644ae7010000'
      }});
    }, 600);

  }

});

module.exports = router;
