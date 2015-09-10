/**
 * Stub of /sources/...
 */

var express = require('express');
var router = express.Router();
var STUBBED_S3_URL = 'http://localhost:8005';


// AUTHENTICATION: get credentials and S3 parameters
router.get('/credentials/s3', function(req, res) {
  res.status(200).json({
    credentials: {
      expires_at: '2014-10-27T10:55:26.000Z',
      path: 'uploads/541b06dc617070006d060000/sources/1414406726029/source.txt',
      signed_url: STUBBED_S3_URL + '/upload/file/to/s3',
      type: 's3'
    }
  });
});

// CREATE source from uploaded raw file
router.post('', function(req, res) {
  res.status(200).json({
    source: {
      id: '5399a07170632d4b0c010000',
      created_at: '2014-05-02T17:44:17.687Z',
      updated_at: '2014-05-02T17:44:17.687Z',
      name: 'Hello',
      user_id: '5363b25c687964476d000000',
      dataset_ids: [],
      data_file_id: "__data_file_SRC_learning-dataset"
    }
  });
});

module.exports = router;
