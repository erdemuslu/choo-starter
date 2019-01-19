module.exports = function(state, emitter) {
  // define store variables
  state.user = {
    name: 'Erdem Uslu'
  }

  // update store variables
  emitter.on('user', function () {
    state.user = {
      name: 'Algun Akgunduz'
    }

    emitter.emit('render')
  })
}
