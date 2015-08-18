/**
 * Stub of /dictionaries/...
 */

var express = require('express');
var router = express.Router();

var dictionary = {
  dictionary: {
    id: '__dictionary-api-contest',
    created_at: '2014-05-02T15:27:37.687Z',
    updated_at: '2014-05-02T15:27:37.687Z',
    name: 'API Contest',
    description: 'Dictionnary generated from dataset built for API Contest',
    user_id: '5363b25c687964476d000000',
    dataset_id: '53c7dea470632d3417020000',
    variable_ids: [
      "__variable-target",
      "__variable-continuous",
      "__variable-powerful",
      "__variable-big",
      "__variable-that",
      "__variable-you",
      "__variable-machine-learning",
      "__variable-api",
      "__variable-data",
      "__variable-with",
      "__variable-crown",
      "__variable-testing",
      "__variable-pineapple",
      "__variable-attributes",
      "__variable-modeling",
      "__variable-madman",
      "__variable-a",
      "__variable-algorithm",
      "__variable-data-analytics",
      "__variable-makes",
      "__variable-soup",
      "__variable-mistakes",
      "__variable-answer",
      "__variable-churnspotter",
      "__variable-congratulation",
      "__variable-platypus",
      "__variable-marketing-decisions",
      "__variable-eggplant",
      "__variable-french",
      "__variable-class",
      "__variable-collection",
      "__variable-predicsis",
      "__variable-decision",
      "__variable-sens",
      "__variable-powered",
      "__variable-best",
      "__variable-useful",
      "__variable-dataset",
      "__variable-learning-rate",
      "__variable-live",
      "__variable-by",
      "__variable-papis",
      "__variable-the",
      "__variable-find",
      "__variable-integrates",
      "__variable-guess",
      "__variable-future",
      "__variable-is",
      "__variable-exercise",
      "__variable-the-2"
    ],
    job_ids: [ 'first', 'middle', 'last']
  }
};

var variables = {
  variables: [
    {
      id: "__variable-target",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:29:33.569Z",
      name: "target",
      type: "categorical",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: ["556f1c206170700001830600"]
    },
    {
      id: "__variable-continuous",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "insight",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-powerful",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "powerful",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-big",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "big",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-that",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "that",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-you",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "You",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-machine-learning",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "Machine Learning",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-api",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "API",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-data",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "data",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-with",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "with",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-crown",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "crown",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-testing",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "testing",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-pineapple",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "Pineapple",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-attributes",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "attributes",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-modeling",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "modeling",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-madman",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "madman",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-a",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "a",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-algorithm",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "algorithm",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-data-analytics",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "data analytics",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-makes",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "makes",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-soup",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "soup",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-mistakes",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "mistakes",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-answer",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "answer",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-churnspotter",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "ChurnSpotter",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-congratulation",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "Congratulation!",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-platypus",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "platypus",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-marketing-decisions",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "Marketing decisions",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-eggplant",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "eggplant",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-french",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "french",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-class",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "class",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-collection",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "collection",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-predicsis",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "PredicSis",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-decision",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "decision",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-sens",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "sense",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-powered",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "powered",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-best",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "best",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-useful",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "useful",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-dataset",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "dataset",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-learning-rate",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "learning rate",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-live",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "live",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-by",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "by",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-papis",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "PAPIS",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-the",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "The",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-find",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "find",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-integrates",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "integrates",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-guess",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "guess",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-future",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "Future",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-is",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "is",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-exercise",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "exercise",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    },
    {
      id: "__variable-the-2",
      created_at: "2015-06-03T15:24:44.017Z",
      updated_at: "2015-06-03T15:24:44.017Z",
      name: "the",
      type: "continuous",
      use: true,
      description: null,
      dictionary_id: "5363b7fc6879644ae7010000",
      modalities_set_ids: []
    }
  ]
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
  var result = {};

  variables.variables.forEach(function(p) {
    if (p.id === req.params.variable_id) {
      result = p;
      return true;
    }
  });

  res.status(200).json({variable: result});
});

module.exports = router;
