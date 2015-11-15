import { isEmpty, pipe } from './util'

export default class Middelware {
  constructor() {
    this._middleware = []
  }

  map(fn) {
    this._middleware.push(fn)
    return this
  }

  fork(fn) {
    this._middleware.push(data => {
      setTimeout(() => fn(data))
      return data
    })
    return this
  }

  emit() {
    if (this._middleware.length > 0)
      return pipe(...this._middleware)
    return x => x
  }

  subscribe() {
    if (this._middleware.length > 0)
      return pipe(...this._middleware)
    return x => x
  }
}
