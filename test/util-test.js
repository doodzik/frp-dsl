import assert          from 'assert'
import { empty, pipe } from '../src/util'

describe('util.js', () => {
  describe('#pipe', () => {
    it('pipes functions', () => {
      const add       = (x, y) => x + y
      const doubleInt = x => 2*x
      const foo       = pipe(add, doubleInt)(2, 2)
      assert(foo, 8)
    })

    it('breaks if function returns empty value', () => {
      var bar = 0
      const notreached = x => bar = 10
      const emptying   = x => x
      const foo        = pipe(emptying, notreached)(null)
      assert(bar ==  0)
    })
  })

  describe('#empty', () => {
    it('number and bool arent empty', () => {
      assert(empty(0) === false)
      assert(empty(true) === false)
    })

    it('undefiend and null are empty', () => {
      assert(empty(null))
      assert(empty())
    })

    it('arr length 0 is empty', () => {
      assert(empty([]))
    })

    it('obj with no key-val is empty', () => {
      assert(empty({}))
      assert(empty({foo: 'bar'}) == false)
    })
  })
})

