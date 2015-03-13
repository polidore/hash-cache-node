# Background

I wanted a library that I could use to name things with MD5 hash strings.  It would ask for the same hash a lot and it needed to be fast. 

# Usage

```javascript
var HashCache = require('hash-cache');
var hashCach = new HashCache('md5');

var hash = hashCache.encode('randomString'); //generates
var hashFromCache = hashCache.encode('randomString'); //serves from memory
```

# Assumptions

You only want strings
