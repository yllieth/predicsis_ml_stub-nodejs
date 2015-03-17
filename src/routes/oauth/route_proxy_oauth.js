/**
 * Stub of /oauth/...
 */

var express = require('express');
var router = express.Router();


router.get('/authorize', function(req, res) {

  /*
   * error case if :
   *   email = error@auth
   *   passw = e
   */
  if (req.headers.authorization === 'Basic ZXJyb3JAYXV0aDpl') {
    res.status(403).json({
      status: 403,
      message: 'stub server forbid access'
    });

  } else
  /*
   * error api case if :
   *   email = error@api
   *   passw = e
   */
  if (req.headers.authorization === 'Basic ZXJyb3JAYXBpOmU=') {
    res.status(200).json({
      // the access_token don't need to be realistic here since a corner case is tested
      'access_token': 'errorApi________________________________________________________', // jshint ignore:line
      'refresh_token': '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40', // jshint ignore:line
      'token_type': 'bearer', // jshint ignore:line
      'expires_in': 345600 // jshint ignore:line
    });
  }  else
  /*
   * error api case if :
   *   email = error@cookie
   *   passw = e
   */
  if (req.headers.authorization === 'Basic ZXJyb3JAY29va2llOmU=') {
    res.status(200).json({
      // the access_token don't need to be realistic here since a corner case is tested
      'access_token': 'errorCookieExpiration____________________________________________', // jshint ignore:line
      'refresh_token': '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40', // jshint ignore:line
      'token_type': 'bearer', // jshint ignore:line
      'expires_in': 1 // jshint ignore:line
    });
  }  else
  /*
   * freeze screen, long time to answer, if :
   *   email = long@time
   *   passw = e
   */
  if (req.headers.authorization === 'Basic bG9uZ0B0aW1lOmU=') {
    setTimeout(function() {
      res.status(200).json({
        // the access_token don't need to be realistic here since a corner case is tested
        'access_token': 'veryLongTime2Respond____________________________________________', // jshint ignore:line
        'refresh_token': '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40', // jshint ignore:line
        'token_type': 'bearer', // jshint ignore:line
        'expires_in': 1 // jshint ignore:line
      });
    }, 2000);
  } else {
    res.status(200).json({
      // nominal case, all values are realistic
      'access_token': 'd75d2750e04ab0c3c6f44a20271496098600d22e602a6e002deacfa5b07be6c5', // jshint ignore:line
      'refresh_token': '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40', // jshint ignore:line
      'token_type': 'bearer', // jshint ignore:line
      'expires_in': 345600 // jshint ignore:line
    });    
  }

});



module.exports = router;
