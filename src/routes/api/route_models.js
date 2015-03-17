/**
 * Stub of /_models/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash');

var model = {
  'model': {
    'id': '5436431070632d15f4260000',
    'created_at': '2014-05-02T16:25:18.687Z',
    'updated_at': '2014-05-02T16:25:18.687Z',
    'type': 'classifier',
    'title': 'My Classifier',
    'user_id': '5363b25c687964476d000000',
    'preparation_rules_set_id': '53fe176070632d0fc5100000',
    'job_ids': [ '53c7ded570632d3417050000' ],
    'model_variables': [
      {
        'name': 'VAR1',
        'level': 0.118822,
        'weight': 0.826756,
        'maximum_a_posteriori': true
      },
      {
        'name': 'VAR2',
        'level': 0.098493,
        'weight': 0.796428,
        'maximum_a_posteriori': true
      }
    ]
  }
};

router.get('/:id', function(req, res) {
  res.status(200).json(model);
});

router.delete('/:modelId', function(req, res) {
  res.status(200).send();
});

router.post('/', function(req, res) {
  res.status(200).json(_(model).omit('model_variables').value());
});

module.exports = router;
