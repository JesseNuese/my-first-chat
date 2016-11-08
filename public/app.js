angular.module('app', []);

angular.module('app')
  .controller('chatController', [function (){
    var chat = this;
    console.log('test');

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


  }]);
