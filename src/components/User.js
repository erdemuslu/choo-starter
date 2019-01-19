const html = require('choo/html')
const Component = require('choo/component')

class User extends Component {
  constructor() {
    super()
    this.name = null
  }

  update () {
    return true // re render true
  }

  createElement ({ name }) {
    this.name = name
    return html`
      <div>Hi, My name is ${this.name}.</div>
    `
  }
}

var user = new User()

module.exports = user
