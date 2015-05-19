/**
 * Stub of /dictionaries/...
 */

var express = require('express');
var router = express.Router();

var dictionary = {
  'dictionary': {
    'id': '5363b7fc6879644ae7010000',
    'created_at': '2014-05-02T15:27:37.687Z',
    'updated_at': '2014-05-02T15:27:37.687Z',
    'name': 'Dictionary 1',
    'description': 'This is the description',
    'user_id': '5363b25c687964476d000000',
    'dataset_id': '53c7dea470632d3417020000',
    'variable_ids': [
      '5469ce4f776f7200010b0000',
      '5469ce4f776f7200010c0000',
      '5469ce4f776f7200010d0000'
    ],
    'job_ids': [
      'first',
      'middle',
      'last'
    ]
  }
};

var variables = {
  'variables': [{
    'id': '5469ce4f776f7200010b0000',
    'created_at': '2014-11-17T10:30:39.407Z',
    'updated_at': '2014-11-17T10:30:39.407Z',
    'name': 'Year',
    'type': 'continuous',
    'use': false,
    'description': 'a description',
    'dictionary_id': '5469ce53617070000ab30000',
    'modalities_set_ids': []
  }, {
    'id': '5469ce4f776f7200010c0000',
    'created_at': '2014-11-17T10:30:39.407Z',
    'updated_at': '2014-11-17T10:30:39.407Z',
    'name': 'Make',
    'type': 'categorical',
    'use': true,
    'description': null,
    'dictionary_id': '5469ce53617070000ab30000',
    'modalities_set_ids': []
  }, {
    'id': '5469ce4f776f7200010d0000',
    'created_at': '2014-11-17T10:30:39.407Z',
    'updated_at': '2014-11-17T10:30:39.407Z',
    'name': 'Model',
    'type': 'categorical',
    'use': false,
    'description': 'another descr.',
    'dictionary_id': '5469ce53617070000ab30000',
    'modalities_set_ids': []
  }]
};

var variable = {
  'variable': {
    'id': '5469ce4f776f7200010b0000',
    'created_at': '2014-11-17T10:30:39.407Z',
    'updated_at': '2014-11-17T10:30:39.407Z',
    'name': 'Year',
    'type': 'continuous',
    'use': false,
    'description': 'a description',
    'dictionary_id': '5469ce53617070000ab30000',
    'modalities_set_ids': []
  }
};

router.get('/:dictionaryId', function(req, res) {
  res.status(200).json(dictionary);
});

router.post('/', function(req, res) {
  var answer = JSON.parse(JSON.stringify(dictionary));
  var status = 201;
  if(req.body.dictionary.dataset_id === 'jobFail') {
    answer.dictionary.job_ids = ['fail'];
  } else if (req.body.dictionary.dataset_id === 'fail') {
    status = 500;
    answer = '';
  }
  setTimeout(function() {
    res.status(status).json(answer);
  }, 1000);

  //res.status(422).json({
  //  message: 'Dataset must have at least 3 lines',
  //  status: 422,
  //  errors: [
  //    {resource: 'Dataset', code: 'invalid'}
  //  ]
  //});
});

router.delete('/:dictionaryId', function(req, res) {
  res.status(204).send();
});

router.get('/:dictionaryId/variables', function(req, res) {
  res.status(200).json(variables);
});

router.get('/:dictionary_id/variables/:variable_id', function(req, res) {
  var result = {};

  variables.variables.forEach(function(p) {
    if (p.id === req.params.variable_id) {
      result = p;
      return true;
    }
  });

  res.status(200).json({variable: result});
});

router.patch('/:dictionary_id/variables/:variable_id', function(req, res) {
  res.status(200).json(variable);
});

module.exports = router;
