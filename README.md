# Background

I wanted a library that I could use to name things with MD5 hash strings.  It would ask for the same hash a lot and it needed to be fast. 

# Usage

```javascript
var hashCache = require('hash-cach')('md5');

var hash = hashCache('randomString'); //generates
var hash = hashCache('randomString'); //serves from memory
```

# Assumptions

You only want strings
