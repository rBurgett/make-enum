# make-enum
Simple Node lib for making enumish things.

### Installation
```
$ npm install make-enum
```

### Usage
```
import makeEnum from 'make-enum';

const colorEnum = makeEnum('red', 'green', 'blue');

console.log(colorEnum.red); // 'red'

// use the contains method to check if a value is valid for that enum
console.log(colorEnum.contains('red')); // true
console.log(colorEnum.contains('black')); // false

// use the toList method to get a list of all possible enum values
console.log(colorEnum.toList()); // ['red', 'green', 'blue']
```

### npm Scripts
Run the tests:
```
$ npm test
```
Transpile code from `src` to `lib`:
```
$ npm run build
```

### License
Apache License Version 2.0

Copyright (c) 2016 by Ryan Burgett.
