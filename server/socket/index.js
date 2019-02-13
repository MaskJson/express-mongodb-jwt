let io;

function init(socketIO) {
  io = socketIO;
  // io.of('/chat');
  io.on('connection', function (socket) {
    socket.emit('news', 'Lv Ling');
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
}

module.exports = {
  init: init
}

