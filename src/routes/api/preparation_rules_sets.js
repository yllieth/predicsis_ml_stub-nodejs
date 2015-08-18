/**
 * Stub of /_models/...
 */

var express = require('express');
var router = express.Router();



var preparation_rules_set = {
  'preparation_rules_set': {
    'id': '53fe176070632d0fc5100000',
    'created_at': '2014-05-02T17:25:26.687Z',
    'updated_at': '2014-10-09T08:10:55.825Z',
    'name': '',
    'user_id': '5363b25c687964476d000000',
    'dataset_id': '53c7dea470632d3417020000',
    'variable_id': '5329601c1757f446e6000002',
    'job_ids': [
      '53c8c88970632d3b9a030002'
    ]
  }
};

router.get('/:id', function(req, res) {
  res.status(200).json(preparation_rules_set);
});

router.post('/', function(req, res) {
  if(req.body.preparation_rules_set.variable_id === 'fail') {
    res.status(500).send();
  } else {
    res.status(200).json(preparation_rules_set);
  }
});

module.exports = router;
