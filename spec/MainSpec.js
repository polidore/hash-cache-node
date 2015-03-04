var hashcache = require('../index.js');

describe("Hash Cash", function()  {
  it("Should work for md5", function() {
    var hashCache = hashcache('md5');
    var hash = hashCache('MSFT-BUY');
    var hash = hashCache('MSFT-BUY');
    expect(hash).toBe('dkjfdkfj');
  });
});
