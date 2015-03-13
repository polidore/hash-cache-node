var crypto = require('crypto');
var URLSafeBase64 = require('urlsafe-base64');

function Hache(algorithm) {
  this.cache = {};
  this.rcache = {};
  this.algorithm = algorithm;
}

Hache.prototype.encode = function(data)  {
    if(this.cache[data]) return this.cache[data];

    var sum = crypto.createHash(this.algorithm);
    sum.update(data);
    var base64 = sum.digest('base64');
    base64 = URLSafeBase64.encode(base64);
    this.cache[data] = base64;
    this.rcache[base64] = data;
    return base64;
}

module.exports = Hache;
