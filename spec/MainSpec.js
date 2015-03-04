var hashcache = require('../index.js');

describe("Hash Cash", function()  {
  it("Basic test of MD5", function() {
    var hashCache = hashcache('md5');
    var hash = hashCache('MSFT-BUY');
    expect(hash).toBe('io2Wq8klRaMIufOxNkX8SA');
  });
});
