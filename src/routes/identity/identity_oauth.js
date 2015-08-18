/**
 * Stub of /oauth/...
 */

var express = require('express');
var router = express.Router();

router.post('/revoke', function(req, res) {
  res.status(200).json({
    'msg': {
      'reason': 'ok' // jshint ignore:line
    }
  });
});

module.exports = router;
