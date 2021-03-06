# FRP Middelware 

[![Build Status](https://travis-ci.org/doodzik/frp-middleware.svg?branch=master)](https://travis-ci.org/doodzik/frp-middleware)

This module aims to ease building middleware DSL's.
It implements a basic functional reactive programming Interface.

# Installation

```bash
$ npm install frp-middelware --save
```

# Usage

### how to use an Stream
```javascript
let stream = new SomeStream()

stream.map(data  => data + '!!!') // => hello world!!!
      .fork(data => data + '???') // => hello world!!!???
      .map(data  => data + '...') // => hello world!!!...

// invokes the stream
stream.subscribe()
```

### how to write your own Stream
```javascript
import Middleware from 'frp-middleware'

class SomeStream extends Middleware {
  subscribe() { // or you could use the 'emit' method. it is the same thing
    const middleware = super.subscribe()
    setIntervall(() => middleware('hello world'), 500)
  }
}
```

# API

### \#map
changes the data in the stream and passes the altered data to the next function in the pipeline

### \#fork
Forks a stream and applies a function to it.
The child stream runs independently of the parent stream.

### \#subscribe
Returns the middleware function
Should be implemented as a way to start listening to the stream.

### \#emit
Returns the middleware function.
Should be implemented as a way to fire events on the stream.

# Examples

[plain-tcp](https://github.com/doodzik/plain-tcp)
