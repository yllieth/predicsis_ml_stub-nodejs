/**
 * Stub of /settings/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash-contrib');

// ---------------------------------------------------------------------------------------------------------------------
// ===                                                    TOKENS                                                     ===
// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------
// ===                                                 APPLICATIONS                                                  ===
// ---------------------------------------------------------------------------------------------------------------------

var applications = [
  {
    id: "540778b5353834003e050000",
    name: "essai",
    uid: "829b6d53ac2736cf9670725eb22288dd3914d4d3a811b0d036fd5eb2bc275540",
    secret: "e7a9d71fbcd0e0f4f1a78b7db8d8311d91517ca0ee1d72594db11b6a60a13732",
    redirect_uri: "http://truc.bidule",
    owner_id: "540762703263310008000000",
    created_at: "2014-09-03T20:23:17.025Z",
    updated_at: "2014-09-03T20:23:17.025Z"
  }
];

router.post('/applications', function(req, res) {
  //var name = _.getPath(req, 'body.application.name');
  //var redirectUri = _.getPath(req, 'body.application.redirect_uri');
  res.status(200).json({ applications: applications[0] });
});

router.get('/applications', function(req, res) {
  res.status(200).json({ applications: applications });
});

router.get('/applications/:id', function(req, res) {
  res.status(200).json({ application: applications[0] });
});

router.patch('/applications/:id', function(req, res) {
  //var name = _.getPath(req, 'body.application.name');
  //var redirectUri = _.getPath(req, 'body.application.redirect_uri');
  res.status(200).json({ application: applications[0] });
});

router.delete('/applications/:id', function(req, res) {
  res.status(204).json();
});

module.exports = router;