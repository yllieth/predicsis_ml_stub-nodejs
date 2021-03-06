/**
 * Stub of /users/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash-contrib');

var user = {
  user: {
    id: '__user-john-doe',
    created_at: '2014-07-18T06:40:20.845Z',
    updated_at: '2014-07-18T06:40:20.847Z',
    name: 'John Doe',
    email: 'john.doe@example.org'
  }
};

router.post('/', function(req, res) {
  var name = _.getPath(req, 'body.user.name');
  if ('fail' === name) {
    res.status(504).json({
      msg: 'fake server refused the request because name was : ' + name,
    });
  } else {
    res.status(200).json(user);
  }
});

router.get('/me', function(req, res) {
  res.status(200).json(user);
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
    res.status(422).json({"message":"Parameter is required","status":422});
  }
});


module.exports = router;
