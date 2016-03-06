/**
 * Created by Yash on 04/03/16.
 */

import path from 'path';

module.exports = function (app, passport) {

  app.get('/', function(req, res) {
    res.sendFile('/dist/index.html', {root: '.'});
  });

  app.get('/something', function(req, res) {
    res.send('Nigga!');
  });
};
