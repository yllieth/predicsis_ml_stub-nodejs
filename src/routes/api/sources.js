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
      key: 'uploads/541b06dc617070006d060000/sources/1414406726029/${filename}',
      aws_access_key_id: 'AKIAIAVVU5KANH5LYROQ',
      signature: '6CYaw7p6fe/TAZPdSr4QtlJi2O8=',
      policy: 'eydleHBpcmF0aW9uJzogJzIwMTQtMTAtMjdUMTA6NTU6MjYuMDAwWicsCiAgICAgICAgICAgJ2NvbmRpdGlvbnMnOiBbCiAgICAgICAgICAgICB7J2J1Y2tldCc6ICdzdGFnLnB1YmxpYy5rbWwtYXBpJ30sCiAgICAgICAgICAgICBbJ3N0YXJ0cy13aXRoJywgJyRrZXknLCAndXBsb2Fkcy81NDFiMDZkYzYxNzA3MDAwNmQwNjAwMDAvc291cmNlcy8xNDE0NDA2NzI2MDI5J10sCiAgICAgICAgICAgICB7J2FjbCc6ICdwcml2YXRlJ30sCiAgICAgICAgICAgICB7J3N1Y2Nlc3NfYWN0aW9uX3N0YXR1cyc6ICcyMDEnfSwKICAgICAgICAgICAgIFsKICAgICAgICAgICAgICAnY29udGVudC1sZW5ndGgtcmFuZ2UnLAogICAgICAgICAgICAgIDEsCiAgICAgICAgICAgICAgMjE0NzQ4MzY0OAogICAgICAgICAgICAgXSwKICAgICAgICAgICAgIFsnc3RhcnRzLXdpdGgnLCckQ29udGVudC1UeXBlJywnbXVsdGlwYXJ0L2Zvcm0tZGF0YSddCiAgICAgICAgICAgXQogICAgICAgfQ==',
      s3_endpoint: STUBBED_S3_URL + '/upload/file/to/s3'
    }
  });
});

router.post('/credentials/s3', function(req, res) {
  // timeout simulates upload time
  setTimeout(function() { res.status(200).json({
    credentials: {
      expires_at: '2014-10-27T10:55:26.000Z',
      key: 'uploads/541b06dc617070006d060000/sources/1414406726029/${filename}',
      aws_access_key_id: 'AKIAIAVVU5KANH5LYROQ',
      signature: '6CYaw7p6fe/TAZPdSr4QtlJi2O8=',
      policy: 'eydleHBpcmF0aW9uJzogJzIwMTQtMTAtMjdUMTA6NTU6MjYuMDAwWicsCiAgICAgICAgICAgJ2NvbmRpdGlvbnMnOiBbCiAgICAgICAgICAgICB7J2J1Y2tldCc6ICdzdGFnLnB1YmxpYy5rbWwtYXBpJ30sCiAgICAgICAgICAgICBbJ3N0YXJ0cy13aXRoJywgJyRrZXknLCAndXBsb2Fkcy81NDFiMDZkYzYxNzA3MDAwNmQwNjAwMDAvc291cmNlcy8xNDE0NDA2NzI2MDI5J10sCiAgICAgICAgICAgICB7J2FjbCc6ICdwcml2YXRlJ30sCiAgICAgICAgICAgICB7J3N1Y2Nlc3NfYWN0aW9uX3N0YXR1cyc6ICcyMDEnfSwKICAgICAgICAgICAgIFsKICAgICAgICAgICAgICAnY29udGVudC1sZW5ndGgtcmFuZ2UnLAogICAgICAgICAgICAgIDEsCiAgICAgICAgICAgICAgMjE0NzQ4MzY0OAogICAgICAgICAgICAgXSwKICAgICAgICAgICAgIFsnc3RhcnRzLXdpdGgnLCckQ29udGVudC1UeXBlJywnbXVsdGlwYXJ0L2Zvcm0tZGF0YSddCiAgICAgICAgICAgXQogICAgICAgfQ==',
      s3_endpoint: STUBBED_S3_URL + '/upload/file/to/s3'
    }
  });}, 3000);
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
