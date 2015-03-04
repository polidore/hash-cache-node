var crypto = require('crypto');
var URLSafeBase64 = require('urlsafe-base64');

module.exports = function(algorithm) {
  this.cache = {};
  this.rcache = {};
  return function(data) {
    if(cache[data]) return cache[data];

    var sum = crypto.createHash(algorithm);
    sum.update(data);
    var base64 = sum.digest('base64');
    base64 = URLSafeBase64.encode(base64);
    cache[data] = base64;
    rcache[base64] = data;
    return base64;
  }
}
