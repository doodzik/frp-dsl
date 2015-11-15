import assert     from 'assert'
import Middleware from '../src/middleware'

describe('Middleware', () => {
  describe('#map', () => {
    it('pushes function onto _middleware', () => {
      let middleware = new Middleware()
      middleware.map('foo')
      assert(middleware._middleware[0], 'foo')
      assert(middleware._middleware.length, 1)
    })
  })

  describe('#fork', () => {
    it('forks stream, doesn affect current stream', done => {
      var bar = false
      let middleware = new Middleware()
      var foo = middleware
      .fork(data => {
        bar = true
        return data + 2
      })
      .emit()(2)
      assert(foo, 2)
      setTimeout(() =>  {
        assert(bar)
        done()
      }, 1 )
    })
  })

  describe('#emit/#subscribe', () => {
    it('returns id fn if middleware empty', () => {
      let middleware = new Middleware()
      let emit       = middleware.emit()
      let subscribe  = middleware.subscribe()
      assert(emit('foo'), 'foo')
      assert(subscribe('foo'), 'foo')
    })
    it('pipes middleware', () => {
      let middleware = new Middleware()
      let fn         = middleware.map(data => 2 + data).map(data => 2 * data)
      let emit       = fn.emit()
      let subscribe  = middleware.subscribe()
      assert(emit(1), 4)
      assert(subscribe(2), 8)
    })
  })
})
