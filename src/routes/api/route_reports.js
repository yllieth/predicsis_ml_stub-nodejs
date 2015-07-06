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
        "name":"PredicSis",
        "type":"continuous",
        "level":0.262258,
        "nb_of_intervals":2,
        "intervals": [
          {
            "missing":false,
            "infinite_minimum":true,
            "infinite_maximum":false,
            "minimum":null,
            "maximum":0.4990476,
            "expression":"]-inf;0.4990476]",
            "frequency":4936,
            "coverage":0.4936,
            "target_distribution":{"0":0.795381,"1":0.204619}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":true,
            "minimum":0.4990476,
            "maximum":null,
            "expression":"]0.4990476;+inf[",
            "frequency":5064,
            "coverage":0.5064,
            "target_distribution":{"0":0.208926,"1":0.791074}
          }
        ]
      },{
        "name":"API",
        "type":"continuous",
        "level":0.180403,
        "nb_of_intervals":8,
        "intervals": [
          {
            "missing":false,
            "infinite_minimum":true,
            "infinite_maximum":false,
            "minimum":null,
            "maximum":0.1268227,
            "expression":"]-inf;0.1268227]",
            "frequency":1254,
            "coverage":0.1254,
            "target_distribution":{"0":0.755183,"1":0.244817}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.1268227,
            "maximum":0.2500378,
            "expression":"]0.1268227;0.2500378]",
            "frequency":1197,
            "coverage":0.1197,
            "target_distribution":{"0":0.252297,"1":0.747703}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.2500378,
            "maximum":0.3740464,
            "expression":"]0.2500378;0.3740464]",
            "frequency":1218,
            "coverage":0.1218,
            "target_distribution":{"0":0.759442,"1":0.240558}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.3740464,
            "maximum":0.50064,
            "expression":"]0.3740464;0.50064]",
            "frequency":1256,
            "coverage":0.1256,
            "target_distribution":{"0":0.224522,"1":0.775478}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.50064,
            "maximum":0.6246577,
            "expression":"]0.50064;0.6246577]",
            "frequency":1187,
            "coverage":0.1187,
            "target_distribution":{"0":0.753159,"1":0.246841}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.6246577,
            "maximum":0.7498236,
            "expression":"]0.6246577;0.7498236]",
            "frequency":1277,
            "coverage":0.1277,
            "target_distribution":{"0":0.254503,"1":0.745497}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.7498236,
            "maximum":0.8753049,
            "expression":"]0.7498236;0.8753049]",
            "frequency":1316,
            "coverage":0.1316,
            "target_distribution":{"0":0.739362,"1":0.260638}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":true,
            "minimum":0.8753049,
            "maximum":null,
            "expression":"]0.8753049;+inf[",
            "frequency":1295,
            "coverage":0.1295,
            "target_distribution":{"0":0.259459,"1":0.740541}
          }
        ]
      },{
        "name":"is",
        "type":"continuous",
        "level":0.103092,
        "nb_of_intervals":6,
        "intervals": [
          {
            "missing":false,
            "infinite_minimum":true,
            "infinite_maximum":false,
            "minimum":null,
            "maximum":0.1674549,
            "expression":"]-inf;0.1674549]",
            "frequency":1664,
            "coverage":0.1664,
            "target_distribution":{"0":0.692308,"1":0.307692}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.1674549,
            "maximum":0.332507,
            "expression":"]0.1674549;0.332507]",
            "frequency":1634,
            "coverage":0.1634,
            "target_distribution":{"0":0.291922,"1":0.708078}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.332507,
            "maximum":0.5003297,
            "expression":"]0.332507;0.5003297]",
            "frequency":1732,
            "coverage":0.1732,
            "target_distribution":{"0":0.677829,"1":0.322171}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.5003297,
            "maximum":0.6662859,
            "expression":"]0.5003297;0.6662859]",
            "frequency":1642,
            "coverage":0.1642,
            "target_distribution":{"0":0.285627,"1":0.714373}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.6662859,
            "maximum":0.8336371,
            "expression":"]0.6662859;0.8336371]",
            "frequency":1671,
            "coverage":0.1671,
            "target_distribution":{"0":0.698384,"1":0.301616}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":true,
            "minimum":0.8336371,
            "maximum":null,
            "expression":"]0.8336371;+inf[",
            "frequency":1657,
            "coverage":0.1657,
            "target_distribution":{"0":0.328908,"1":0.671092}
          }
        ]
      },{
        "name":"the",
        "type":"continuous",
        "level":0.0672031,
        "nb_of_intervals":4,
        "intervals": [
          {
            "missing":false,
            "infinite_minimum":true,
            "infinite_maximum":false,
            "minimum":null,
            "maximum":0.2514223,
            "expression":"]-inf;0.2514223]",
            "frequency":2559,
            "coverage":0.2559,
            "target_distribution":{"0":0.654162,"1":0.345838}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.2514223,
            "maximum":0.4996949,
            "expression":"]0.2514223;0.4996949]",
            "frequency":2434,
            "coverage":0.2434,
            "target_distribution":{"0":0.330731,"1":0.669269}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.4996949,
            "maximum":0.7491612,
            "expression":"]0.4996949;0.7491612]",
            "frequency":2472,"coverage":0.2472,
            "target_distribution":{"0":0.654935,"1":0.345065}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":true,
            "minimum":0.7491612,
            "maximum":null,
            "expression":"]0.7491612;+inf[",
            "frequency":2535,
            "coverage":0.2535,
            "target_distribution":{"0":0.349507,"1":0.650493}
          }
        ]
      },{
        "name":"answer",
        "type":"continuous",
        "level":0.015476,
        "nb_of_intervals":10,
        "intervals": [
          {
            "missing":false,
            "infinite_minimum":true,
            "infinite_maximum":false,
            "minimum":null,
            "maximum":0.1000099,
            "expression":"]-inf;0.1000099]",
            "frequency":1002,
            "coverage":0.1002,
            "target_distribution":{"0":0.585828,"1":0.414172}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.1000099,
            "maximum":0.1974666,
            "expression":"]0.1000099;0.1974666]",
            "frequency":995,
            "coverage":0.0995,
            "target_distribution":{"0":0.39196,"1":0.60804}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.1974666,
            "maximum":0.2992381,
            "expression":"]0.1974666;0.2992381]",
            "frequency":973,
            "coverage":0.0973,
            "target_distribution":{"0":0.617677,"1":0.382323}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.2992381,
            "maximum":0.4005935,
            "expression":"]0.2992381;0.4005935]",
            "frequency":1033,
            "coverage":0.1033,
            "target_distribution":{"0":0.417231,"1":0.582769}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.4005935,
            "maximum":0.5008288,
            "expression":"]0.4005935;0.5008288]",
            "frequency":1016,
            "coverage":0.1016,
            "target_distribution":{"0":0.595472,"1":0.404528}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.5008288,
            "maximum":0.600597,
            "expression":"]0.5008288;0.600597]",
            "frequency":971,
            "coverage":0.0971,
            "target_distribution":{"0":0.38105,"1":0.61895}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.600597,
            "maximum":0.7013476,
            "expression":"]0.600597;0.7013476]",
            "frequency":967,
            "coverage":0.0967,
            "target_distribution":{"0":0.594623,"1":0.405377}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.7013476,
            "maximum":0.7999876,
            "expression":"]0.7013476;0.7999876]",
            "frequency":1000,
            "coverage":0.1,
            "target_distribution":{"0":0.415,"1":0.585}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":false,
            "minimum":0.7999876,
            "maximum":0.8997624,
            "expression":"]0.7999876;0.8997624]",
            "frequency":1036,
            "coverage":0.1036,
            "target_distribution":{"0":0.600386,"1":0.399614}
          },{
            "missing":false,
            "infinite_minimum":false,
            "infinite_maximum":true,
            "minimum":0.8997624,
            "maximum":null,
            "expression":"]0.8997624;+inf[",
            "frequency":1007,
            "coverage":0.1007,
            "target_distribution":{"0":0.385303,"1":0.614697}
          }
        ]
      }, {
        // I simply add this one to have at least one categorical variable
        // it may introduce some inconsistency...
        name: 'fake',
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
