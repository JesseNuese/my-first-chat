var express = require('express'),
    logger = require('morgan')('dev'),
    fileserver = express.static('public'),
    app = express(),
    PORT = process.env.PORT || 8080;

app.use(logger, fileserver);

app.server = app.listen(PORT, (error) => {
  if(error) {
    console.error('Servere could not start', error);
    process.exit(1);
  } else {
    console.log('Server is up and listening to port', PORT);
  };
});

var sockets = require('./controllers/sockets');
sockets(app, PORT);
