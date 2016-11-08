var io = require('socket.io');

module.exports = (app, PORT) => {
    console.log('Loading Sockets');

    var socketServer = io(app.server);

    socketServer.on('connection', (socket) => {
      console.log('Socket server connected');

      socket.on('shout', data => {
        console.log('Received a shout from', data.sender);
        socketServer.emit('shout', data);
      })
    });
}
