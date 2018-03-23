var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = (req.headers['x-forwarded-for'] ||
    // req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress).split(",")[0];

  res.send('<p>Hello World!</p>');
  res.send('<p>Your come from </p>'+ip);
  return res.end();
});

module.exports = router;
