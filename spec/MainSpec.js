var HashCache = require('../index.js');

describe("Hash Cash", function()  {
  it("Basic test of MD5", function() {
    var hashCache = new HashCache('md5');
    var ss = 'MSFT-BUY';
    var symbolSide = hashCache.encode(ss);
    var uss = '9254-MSFT-BUY';
    var userSymbolSide = hashCache.encode(uss);
    expect(symbolSide).toBe('io2Wq8klRaMIufOxNkX8SA');
    expect(userSymbolSide).toBe('jAH1pT4TuUFVsl8KH-_IDQ');
    expect(hashCache.cache[ss]).toBe('io2Wq8klRaMIufOxNkX8SA');
    expect(hashCache.rcache['io2Wq8klRaMIufOxNkX8SA']).toBe(ss);
  });
});
