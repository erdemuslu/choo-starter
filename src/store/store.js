module.exports = function(state, emitter) {
  state.user = {
    name: 'Erdem Uslu'
  }

  emitter.on('user', function () {
    state.user = {
      name: 'Algun Akgunduz'
    }
    emitter.emit('render')
  })
}
