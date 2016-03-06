/**
 * Created by Yash on 24/02/16.
 */

var express = require('express');
var app = express();

// Run webpack server
require('./server/config/webpack')(app);

// Bootstrap mongoDb settings
require('./server/config/mongoose')();

// Bootstrap express application settings
require('./server/config/express')(app);

// Bootstrap routes
require('./server/routes')(app);
