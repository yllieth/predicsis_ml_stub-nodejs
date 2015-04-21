/**
 * Stub of /settings/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash-contrib');

router.post('/tokens', function(req, res) {
  //var name = _.getPath(req, 'body.token.name');
  res.status(200).json({
    access_tokens: {
      id: "55353df361707000013c0300",
      token: "072ac0f1ced442f8c3ec4225e4546819bf8c9c2b8a77c8aebc057748d4ae7a64",
      name: "Token for my personal application over Predicsis API",
      created_at: "2015-04-20T17:57:07.976Z",
      updated_at: "2015-04-20T17:57:07.976Z"
    }
  });
});

router.get('/tokens', function(req, res) {
  res.status(200).json({
    tokens: [
      {
        id: "5409cc5f69702d0007180000",
        created_at: "2014-09-05T14:44:47.172Z",
        updated_at: "2014-09-05T14:44:47.172Z"
      },
      {
        id: "55353df361707000013c0300",
        created_at: "2015-04-20T17:57:07.976Z",
        updated_at: "2015-04-20T17:57:07.976Z"
      },
      {
        id: "55353e3761707000013d0300",
        created_at: "2015-04-20T17:58:15.454Z",
        updated_at: "2015-04-20T17:58:15.454Z"
      }
    ]
  })
});

router.get('/tokens/:id', function(req, res) {
  res.status(200).json({
    access_tokens: {
      id: "5409cc5f69702d0007180000",
      created_at: "2014-09-05T14:44:47.172Z",
      updated_at: "2014-09-05T14:44:47.172Z"
    }
  });
});

router.delete('/tokens/:id', function(req, res) {
  res.status(204).json();
});

module.exports = router;