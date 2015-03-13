var Hache = require('../index.js');

describe("Hache", function()  {
  it("Basic test of MD5", function() {
    var hache = new Hache('md5');
    var ss = 'MSFT-BUY';
    var symbolSide = hache.encode(ss);
    var uss = '9254-MSFT-BUY';
    var userSymbolSide = hache.encode(uss);
    expect(symbolSide).toBe('io2Wq8klRaMIufOxNkX8SA');
    expect(userSymbolSide).toBe('jAH1pT4TuUFVsl8KH-_IDQ');
    expect(hache.cache[ss]).toBe('io2Wq8klRaMIufOxNkX8SA');
    expect(hache.rcache['io2Wq8klRaMIufOxNkX8SA']).toBe(ss);
  });
});
