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
    res.status(401).json({
      status: 401,
      message: 'Invalid email or password',
      errors: [
        { resource: 'User', field: 'email+password', code: 'invalid' }
      ]
    });

  } else
  /*
   * error api case if :
   *   email = error@api
   *   passw = e
   */
  if (req.headers.authorization === 'Basic ZXJyb3JAYXBpOmU=') {
    res.status(401).json({
      // the access_token don't need to be realistic here since a corner case is tested
      access_token: 'errorApi________________________________________________________',
      refresh_token: '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40',
      token_type: 'bearer',
      expires_in: 345600
    });
  }  else
  /*
   * error api case if :
   *   email = error@cookie
   *   passw = e
   */
  if (req.headers.authorization === 'Basic ZXJyb3JAY29va2llOmU=') {
    res.status(401).json({
      // the access_token don't need to be realistic here since a corner case is tested
      access_token: 'errorCookieExpiration____________________________________________',
      refresh_token: '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40',
      token_type: 'bearer',
      expires_in: 1
    });
  }  else
  /*
   * freeze screen, long time to answer, if :
   *   email = long@time
   *   passw = e
   */
  if (req.headers.authorization === 'Basic bG9uZ0B0aW1lOmU=') {
    setTimeout(function() {
      res.status(401).json({
        // the access_token don't need to be realistic here since a corner case is tested
        access_token: 'veryLongTime2Respond____________________________________________',
        refresh_token: '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40',
        token_type: 'bearer',
        expires_in: 1
      });
    }, 2000);
  } else {
    res.status(200).json({
      // nominal case, all values are realistic
      access_token: 'd75d2750e04ab0c3c6f44a20271496098600d22e602a6e002deacfa5b07be6c5',
      refresh_token: '7dfa578d4d42f6d26667207657fddfde41bf60829a569036771a7354d5e81a40',
      token_type: 'bearer',
      expires_in: 345600
    });
  }

});



module.exports = router;
