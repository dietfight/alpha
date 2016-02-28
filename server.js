var config = require('./webpack.config');

//import 'babel/polyfill';
import _ from 'lodash';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import apiRouter from './api/apiRouter'

let appRouter = new express.Router();

// Setup Express.js
const app = express();

// Makes configuration available to the application
app.locals.hostname = process.env.HOST_NAME || 'localhost';
app.locals.port = process.env.PORT || '5000';
app.locals.protocol = process.env.PROTOCOL || 'http:';

// Set's the host based on the configuration or from defaults
const host = `${app.locals.protocol}//${app.locals.hostname}:${app.locals.port}`;

// JSON parser
app.use(bodyParser.json());

// Serve's static files
app.use('/static', express.static(__dirname + '/static'));

app.use('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Starts Express.js server
(function initServer() {
  app.listen(app.locals.port, () => {
    if (process.send) {
      process.send({
        status: 'online',
        port: app.locals.port
      });
    }

    console.log(`The server is running at ${host}`);
  });
})();

export default app;
