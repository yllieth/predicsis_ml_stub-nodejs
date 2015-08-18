/**
 * Stub of /_models/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash');

var model = {
  model: {
    id: '5436431070632d15f4260000',
    created_at: '2014-05-02T16:25:18.687Z',
    updated_at: '2014-05-02T16:25:18.687Z',
    type: 'classifier',
    title: 'My Classifier',
    user_id: '5363b25c687964476d000000',
    preparation_rules_set_id: '53fe176070632d0fc5100000',
    job_ids: [ '53c7ded570632d3417050000' ],
    model_variables: [
      {name:"PredicSis", "level":0.272059,  "weight":0.824467, "maximum_a_posteriori":true},
      {name:"API",       "level":0.17569,   "weight":0.810848, "maximum_a_posteriori":true},
      {name:"answer",    "level":0.0117434, "weight":0.799946, "maximum_a_posteriori":true},
      {name:"is",        "level":0.098111,  "weight":0.719135, "maximum_a_posteriori":true},
      {name:"the",       "level":0.0636002, "weight":0.669638, "maximum_a_posteriori":true},
      {name:"fake",      "level":0.0636002, "weight":0.669638, "maximum_a_posteriori":false}
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
