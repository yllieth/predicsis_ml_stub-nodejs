/**
 * Stub of /datasets/...
 */
var express = require('express');
var router = express.Router();
var S3_URL = 'http://localhost:8005';
var dataFiles = {
  data_files: [
    {
      id: "__data_file_DS_learning-dataset",
      filename: "learning-dataset.csv",
      type: 'S3',
      size: 538296,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_learning-dataset/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'learning_dataset'
    },
    {
      id: "__data_file_SRC_learning-dataset",
      filename: "learning-dataset.csv",
      type: 'S3',
      size: 538296,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_SRC_learning-dataset/signed_url' } },
      fileable_type: 'Source',
      fileable_id: 'learning_dataset'
    },
    {
      id: "__data_file_DS_learning-dataset-with-model",
      filename: "learning-dataset.csv",
      type: 'S3',
      size: 538296,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_learning-dataset-with-model/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'learning_dataset_with_model'
    },
    {
      id: "__data_file_DS_learned_learning_dataset",
      filename: "split-70-learning-dataset.csv",
      type: 'S3',
      size: 376807,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_learned_learning_dataset/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'learned_learning_dataset'
    },
    {
      id: "__data_file_DS_tested_learning_dataset",
      filename: "split-30-learning-dataset.csv",
      type: 'S3',
      size: 161488,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_tested_learning_dataset/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'tested_learning_dataset'
    },
    {
      id: "__data_file_DS_fail",
      filename: "test-failure-on-dataset-deletion.csv",
      type: 'S3',
      size: 42,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_fail/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'fail'
    },
    {
      id: "__data_file_DS_scoring_dataset",
      filename: "scoreset-input.txt",
      type: 'S3',
      size: 53829364696,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_scoring_dataset/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'scoring_dataset'
    },
    {
      id: "__data_file_DS_scoreset",
      filename: "scoreset-output.csv",
      type: 'S3',
      size: 561,
      signed_url: { links: { self: 'https://api.predicsis.com/data_files/__data_file_DS_scoreset/signed_url' } },
      fileable_type: 'Dataset',
      fileable_id: 'scoreset'
    }
  ]
};

var signedUrl = {
  data_file: {
    signed_url: S3_URL + '/download/file/from/s3/learning-dataset.csv'
  }
};

// ---------------------------------------------------------------------------------------------------------------------

// GET all data_files
router.get('/', function(req, res) {
  res.status(200).json(dataFiles);
});

// GET single data_file
router.get('/:data_file_id', function(req, res) {
  var dataFile = dataFiles.data_files.filter(function(dataFile) {
    return dataFile.id === req.params.data_file_id;
  })[0];

  res.status(200).json({data_file: dataFile});
});

// GET single signed url
router.get('/:data_file_id/signed_url', function(req, res) {
  setTimeout(function() { res.status(200).json(signedUrl); }, 200);
});

module.exports = router;
