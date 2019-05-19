import EventTarget from 'event-target-shim'

class EventDispatch extends EventTarget {
  constructor() {
    super()
    this.addEventListener('authenticationFailed', this.handleAuthFailed)
    this.addEventListener('gotBalanceOk', this.handleGotBalanceOk)
  }

  handleAuthFailed(event) {
    console.log('Got auth failed event:', event)
  }

  handleGotBalanceOk(event) {
    console.log('Got balance ok', event)
  }
}

const myDispatch = new EventDispatch()

export default myDispatch
