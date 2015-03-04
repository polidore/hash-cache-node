var hashcache = require('../index.js');

describe("Hash Cash", function()  {
  it("Basic test of MD5", function() {
    var hashCache = hashcache('md5');
    var ss = 'MSFT-BUY';
    var symbolSide = hashCache(ss);
    var uss = '9254-MSFT-BUY';
    var userSymbolSide = hashCache(uss);
    expect(symbolSide).toBe('io2Wq8klRaMIufOxNkX8SA');
    expect(userSymbolSide).toBe('jAH1pT4TuUFVsl8KH-_IDQ');
  });
});
