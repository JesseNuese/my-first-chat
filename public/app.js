angular.module('app', []);

angular.module('app')
  .controller('chatController', ['$scope', function ($scope){

    var chat = this;

    console.log('loaded chatController');

    chat.username = '';

    chat.messageHistory = [];

    chat.sendShout = function() {
      console.log('Shout to ALL from', chat.username, ':',chat.message);
      socket.emit('shout', {
        sender:chat.username,
        content:chat.message
      });
      chat.message = '';

    };
    socket.on('shout', function(data){
      data.sender +=('ALL');
      console.log('Shout to ALL FROM', data.sender,':',data.content);
      chat.messageHistory.push(data);
    });
    chat.join = function() {
      console.log('Joining the ', chat.room, ':','room');
      socket.emit('join', {
        sender:chat.username,
        room:chat.room
      });


    };
    chat.leave = function() {
      console.log('Leaving the Room');
      socket.emit('leave', {
        sender:chat.username,
        room:chat.room
      });
      chat.room = '';

    };
    chat.sendTalk = function() {
      console.log('Talk to', chat.room, 'from', chat.username, ':', chat.message);
      if (chat.room)
      socket.emit('talk', {
        sender:chat.username,
        content:chat.message
      });
      chat.message = '';

    };


  }]);
