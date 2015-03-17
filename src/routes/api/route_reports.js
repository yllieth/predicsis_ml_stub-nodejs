/**
 * Stub of /_models/...
 */

var express = require('express');
var router = express.Router();

var trainClassifierEvaluation = {
  report: {
    id: 'train_classifier_evaluation',
    created_at: '2015-01-08T09:14:57.499Z',
    updated_at: '2015-01-08T09:14:58.612Z',
    title: null,
    type: 'classifier_evaluation',
    main_modality: '1',
    accuracy: 0.940941,
    compression: 0.0490113,
    area_under_curve: 0.588956,
    user_id: '541b06dc617070006d060000',
    dataset_id: '53a492e870632d6ec1000000',
    job_ids: [ '54ae4a916170700001ca0200' ],
    classifier_id: '5469b18470632d1479020016',
    confusion_matrix: {
      modalities: [ '0', '1' ],
      matrix: [ [ 940, 59 ], [ 0, 0 ] ]
    },
    lift_curves: {
      optimal: [0.0,18.3959,36.7919,55.1878,73.5837,91.9796,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0],
      classifier: [0.0,14.8213,28.2919,39.5317,49.0045,56.8439,63.224,68.7262,73.2353,76.9344,79.7172,81.9932,83.9706,85.5317,87.0588,88.2466,89.2421,90.0113,90.7353,91.3688,92.0023,92.5566,92.9412,93.371,93.7217,94.1176,94.3552,94.6493,94.9661,95.181,95.4751,95.6787,95.7805,95.9389,96.0633,96.2443,96.4163,96.5498,96.6629,96.776,96.8665,97.0249,97.1154,97.2059,97.2738,97.3756,97.4095,97.5566,97.6018,97.681,97.8507,97.8959,97.9751,98.0317,98.1448,98.224,98.3371,98.4163,98.4729,98.5294,98.586,98.6991,98.8122,98.8914,98.948,98.9819,99.0385,99.095,99.1855,99.2421,99.276,99.3326,99.3665,99.4231,99.457,99.5249,99.5475,99.6041,99.6606,99.7172,99.7172,99.7398,99.7398,99.7738,99.7851,99.819,99.8529,99.8869,99.9095,99.9321,99.9434,99.9434,99.9434,99.9434,99.9548,99.9774,99.9774,99.9774,99.9887,99.9887,100.0]
    }
  }
};

var testClassifierEvaluation = {
  report: {
    id: 'test_classifier_evaluation',
    created_at: '2015-01-08T09:14:57.499Z',
    updated_at: '2015-01-08T09:14:58.612Z',
    title: null,
    type: 'classifier_evaluation',
    main_modality: '1',
    accuracy: 0.940941,
    compression: 0.0490113,
    area_under_curve: 0.588956,
    user_id: '541b06dc617070006d060000',
    dataset_id: '53a492e870632d6ec1000000',
    job_ids: [ '54ae4a916170700001ca0200' ],
    classifier_id: '5469b18470632d1479020016',
    confusion_matrix: {
      modalities: [ '0', '1' ],
      matrix: [ [ 940, 59 ], [ 0, 0 ] ]
    },
    lift_curves: {
      optimal: [0.0,18.3959,36.7919,55.1878,73.5837,91.9796,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0],
      classifier: [0.0,19.0374,32.8424,44.0797,53.2542,60.8868,66.0333,70.1346,73.7609,76.2312,77.8464,79.62,81.1718,82.502,83.7213,84.4656,85.1465,85.7957,86.3183,86.9042,87.4901,88.0918,88.4877,88.9628,89.4854,89.8971,90.2138,90.5146,90.7522,91.0372,91.2431,91.5756,91.829,92.114,92.3832,92.6366,92.8899,93.1908,93.4442,93.5867,93.8242,93.9984,94.2835,94.426,94.5685,94.7585,94.9327,95.1386,95.3286,95.5503,95.7561,95.9937,96.152,96.3895,96.5162,96.6746,96.8804,96.9755,97.1021,97.3555,97.498,97.688,97.8306,98.0048,98.0998,98.2106,98.274,98.3531,98.464,98.5432,98.5907,98.654,98.749,98.8282,98.9865,99.0974,99.1449,99.1766,99.2557,99.3032,99.3349,99.3824,99.4616,99.4774,99.5249,99.5724,99.6358,99.6833,99.715,99.7308,99.7625,99.7941,99.81,99.8258,99.8575,99.8733,99.8892,99.9208,99.9208,100.0,100.0]
    }
  }
};

var univariateSupervised = {
  report: {
    id: 'univariate_supervised',
    created_at: '2015-01-08T09:11:59.642Z',
    updated_at: '2015-01-08T09:12:00.597Z',
    title: null,
    type: 'univariate_supervised',
    target_modalities: [ 0, 1 ],
    user_id: '541b06dc617070006d060000',
    dataset_id: '53a492e870632d6ec1000000',
    job_ids: [ '54ae49df6170700001c70200' ],
    variable_id: '5469ce4f776f7200010c0000',
    dictionary_id: '5469b18470632d1479020001',
    variable_statistics: [
      {
        name: 'VAR1',
        type: 'categorical',
        level: 0.0146974,
        nb_of_groups: 2,
        groups: [
          {
            value_list: [ '', '*' ],
            frequency: 19,
            coverage: 0.019019,
            target_distribution: { '0': 0.684211, '1': 0.315789 }
          },
          {
            frequency: 980,
            coverage: 0.980981,
            value_list: [ 'cJvF', 'UYBR' ],
            target_distribution: { '0': 0.945918, '1': 0.0540816 }
          }
        ]
      },
      {
        name: 'VAR2',
        type: 'continuous',
        level: 0.00328684,
        nb_of_intervals: 3,
        intervals: [
          {
            missing: true,
            infinite_minimum: false,
            infinite_maximum: false,
            minimum: null,
            maximum: null,
            expression: 'Missing',
            frequency: 7556,
            coverage: 0.15112,
            target_distribution: {
              '0': 0.96551,
              '1': 0.0344896
            }
          },
          {
            missing: true,
            infinite_minimum: true,
            infinite_maximum: false,
            minimum: null,
            maximum: -29,
            expression: ']-inf;-29]',
            frequency: 18938,
            coverage: 0.37876,
            target_distribution: {
              '0': 0.928651,
              '1': 0.0713494
            }
          },
          {
            missing: false,
            infinite_minimum: false,
            infinite_maximum: false,
            minimum: -29,
            maximum: -5,
            expression: ']-29;+inf]',
            frequency: 23506,
            coverage: 0.47012,
            target_distribution: {
              '0': 0.928651,
              '1': 0.0713494
            }
          }
        ]
      }
    ]
  }
};

router.get('/:id', function(req, res) {
  if(req.params.id === 'univariate_supervised') {
    res.status(200).json(univariateSupervised);
  } else if (req.params.id === 'test_classifier_evaluation') {
    res.status(200).json(testClassifierEvaluation);
  } else if (req.params.id === 'train_classifier_evaluation') {
    res.status(200).json(trainClassifierEvaluation);
  } else if (req.params.id === 'fail') {
    res.status(500).end();
  }
});

router.post('/', function(req, res) {
  if(req.body.report.variable_id === 'fail') {
    res.status(500).send();
  } else {
    if (req.body.report.type === 'classifier_evaluation') {
      res.status(201).json(testClassifierEvaluation);
    } else if (req.body.report.type === 'univariate_supervised') {
      res.status(201).json(univariateSupervised);
    }
  }
});

module.exports = router;
