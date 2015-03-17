/**
 * Stub of /users/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash-contrib');

router.post('/', function(req, res) {
  var name = _.getPath(req, 'body.user.name');
  if ('fail' === name) {
    res.json(504, {
      msg: 'fake server refused the request because name was : ' + name,
    });
  } else {
    res.json(200, {
      'user': {
        'id': '5347b31750432d45a5020000',
        'created_at': '2014-07-18T06:40:20.845Z',
        'updated_at': '2014-07-18T06:40:20.847Z',
        'name': 'John Doe',
        'email': 'john.doe@example.org'
      }
    });
  }
});

router.get('/me', function(req, res) {
  res.json(200, {
    'user': {
      'id': '5347b31750432d45a5020000',
      'created_at': '2014-07-18T06:40:20.845Z',
      'updated_at': '2014-07-18T06:40:20.847Z',
      'name': 'John Doe',
      'email': 'john.doe@example.org'
    }
  });
});

router.post('/password', function(req, res) {
  var email = _.getPath(req, 'body.user.email');
  var redirection = _.getPath(req, 'body.user.redirect_uri');

  if (email && redirection) {
    if(email === "dukenukem@forever.com") {
      res.send(404, {
        "message":"Resource not found",
        "status":404,
        "errors":[{"resource":"User","field":"email"}]
      });
    }
    else {
      //user exists
      res.send(204);
    }
  }
  else {
    res.json(422, {"message":"Parameter is required","status":422});
  }
});


module.exports = router;
