class EventDispatch extends EventTarget {
  constructor() {
    super()
    console.log('Inside event dispatch')
  }

  handleAuthFailed(event) {
    console.log('Got auth failed event:', event)
  }
}

const myDispatch = new EventDispatch()

myDispatch.addEventListener('authenticationFailed', myDispatch.handleAuthFailed)

export default myDispatch
