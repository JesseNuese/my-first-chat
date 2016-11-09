//SocketIO require
var io = require('socket.io');

module.exports = (app, PORT) => {
    console.log('Loading Sockets');

    var socketServer = io(app.server);

    socketServer.on('connection', (socket) => {
      console.log('Socket server connected');
      // Shouts message to ALL
      socket.on('shout', function(data) => {
        console.log('Received a shout from', data.sender ':', data.content);
        socketServer.emit('shout', data);
      });

      // Join room
      socket.on('join', (data) => {
        console.log(data.sender, 'joined room', data.room);
        socket.join(data.room);
        socketServer.to(data.room).emit('talk', {sender: 'System', room: data.room, content: data.sender + ' entered the '
        });
      });

      // Leave room
      socket.on('leave', (data) => {
        console.log(data.sender, 'left room', data.room);
        socketServer.to(data.room).emit('talk', { sender: 'System', room: data.room, content: data.sender + ' left the ' +
        socket.leave();
        socket[data.sender] = null;
      });
    });

    // Create User id
      socket.on('login', (data) => {
        console.log(data.sender, 'logged in');
        sockets.push({ user: data.sender, socket: socket });


      });
};
