var crypto = require('crypto');

module.exports = function(algorithm) {
  var cache = {};
  var rcache = {};
  return function(data) {
    var sum = crypto.createHash(algorithm);
    sum.update(data);
    return sum.digest('hex');
  }
}
