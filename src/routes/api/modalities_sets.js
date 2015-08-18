/**
 * Stub of /datasets/...
 */

var express = require('express');
var router = express.Router();
var STUBBED_S3_URL = 'http://localhost:8005';

/**
* first dataset data_file is an html file locally available
* this is necesarry to test dataset_list download feature
*/

var modalitiesSetsList = {
  "modalities_sets": [
    {
      "id": "53fdfa7070632d0fc5030000",
      "created_at": "2014-05-02T17:13:56.687Z",
      "user_id": "5363b25c687964476d000000",
      "dataset_id": "53c7dea470632d3417020000",
      "variable_id": "5329601c1757f446e6000002",
      "job_ids": [
        "53c8c88970632d3b9a030001"
      ]
    },
    {
      "id": "53fdfa7070632d0fc5030000",
      "created_at": "2014-05-02T17:13:59.687Z",
      "user_id": "5363b25c687964476d000000",
      "dataset_id": "53c7dea470632d3417020002",
      "variable_id": "5329601c1757f446e6000003",
      "job_ids": [
        "53c8c88970632d3b9a030002"
      ]
    }
  ]
};

router.get('/:id', function(req, res) {
  res.status(200).json({
   "modalities_set": {
      "id": "53fdfa7070632d0fc5030000",
      "created_at": "2014-05-02T17:13:56.687Z",
      "user_id": "5363b25c687964476d000000",
      "dataset_id": "53c7dea470632d3417020000",
      "variable_id": "5329601c1757f446e6000002",
      "job_ids": [
        "53c8c88970632d3b9a030001"
      ],
      "modalities": [
        "0",
        "1"
      ]
    } 
  });
});

// retrieve modalities
router.post('/', function(req, res) {
  res.status(201).json({
    "modalities_set": {
      "id": "53fdfa7070632d0fc5030000",
      "created_at": "2014-05-02T17:13:56.687Z",
      "user_id": "5363b25c687964476d000000",
      "dataset_id": "53c7dea470632d3417020000",
      "variable_id": "5329601c1757f446e6000002",
      "job_ids": [
        "53c8c88970632d3b9a030001"
      ]
    } 
  });
});

router.get('/', function(req, res) {
  res.status(200).json(modalitiesSetsList);
});

module.exports = router;
