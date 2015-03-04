var crypto = require('crypto');
var URLSafeBase64 = require('urlsafe-base64');

module.exports = function(algorithm) {
  var cache = {};
  var rcache = {};
  return function(data) {
    var sum = crypto.createHash(algorithm);
    sum.update(data);
    var base64 = sum.digest('base64');
    return URLSafeBase64.encode(base64);
  }
}
