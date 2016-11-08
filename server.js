var express = require('express'),
    logger = require('morgan')('dev'),
    fileserver = express.static('public'),
    app = express(),
    PORT = process.env.PORT || 8080;

app.use(logger, fileserver);

app.server
