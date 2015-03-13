# Background

I wanted a library that I could use to name things with MD5 hash strings.  It would ask for the same hash a lot and it needed to be fast. 

# Usage

```javascript
var Hache = require('hache');
var hache = new Hache('md5');

var hash = hache.encode('randomString'); //generates
var hashFromCache = hache.encode('randomString'); //serves from memory
```

# Assumptions

You only want strings
