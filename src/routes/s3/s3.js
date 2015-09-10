/**
 * Stub of /s3/...
 */
var express = require('express');
var router = express.Router();
var o2x = require('object-to-xml');

router.put('/file/to/s3', function(req, res) {

    var content = '';

    var isBadFile = false;

   req.on('data', function (chunck) {
     content += chunck;
   });

   req.on('end', function () {
    if (content.indexOf('isBadFile') > -1) {
      isBadFile = true;
    }
   });

  setTimeout(function() {
    if (isBadFile){
      res.status(403).send(o2x({
        '?xml version="1.0" encoding="utf-8"?' : null,
        Error: {
          Code: 'AccessDenied',
          Message: 'Invalid according to Policy: Policy Condition failed: ["eq", "$x-amz-meta-filename", "hello (fail).csv"]',
          RequestId: '0FC0137FB93EFA92',
          HostId: 'omafgTuldZabRmMuHSV7WhKO3Jy9JXSZrWjGDRHxo5aNSYXPoqo+g5FcWgbFd9OdsmoDsoU+/Ok='
        }
      }));
    } else {
      res.status(201).send(o2x({
        '?xml version="1.0" encoding="utf-8"?' : null,
        PostResponse: {
          Location: 'https://stag.public.kml-api.s3-us-west-2.amazonaws.com/uploads%2F541b06dc617070006d060000%2Fsources%2F1415279801866%2Fhello.csv',
          Bucket:'stag.public.kml-api',
          Key:'uploads/541b06dc617070006d060000/sources/1415279801866/hello.csv',
          ETag:'f997f140a3868b2ce66cfc46c6fb901d'
        }
      }));
    }
  }, 2000);

});

module.exports = router;
