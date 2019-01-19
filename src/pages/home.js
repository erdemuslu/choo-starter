const html = require('choo/html')

// load components
const user = require('../components/User')

module.exports = function home (state, emit) {
  return html`
    <body>
      home
      <button onclick=${updateUser} type="button">Change User</button>
      ${user.render(state.user)}
    </body>
  `

  function updateUser () {
    emit('user')
  }
}
