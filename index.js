'use strict';

var express = require('express.io');
var app = express();
var port = 3000;

app.http().io();
app.use(express.static(__dirname + '/app'));

app.listen(port, function() {
  console.log('\n ==================================\n' +
              ' = Server listening on port: ' + port + ' =' +
              '\n ==================================\n');
});


app.io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('button 1', function (data) {
    console.log(data);
  });
});

app.io.on('connection', function (socket) {
  socket.on('button 2', function (data) {
    console.log(data);
  });
});

app.io.on('connection', function (socket) {
  socket.on('button 3', function (data) {
    socket.emit('b3', { b3: 'b3' });
  });
  socket.on('button 3', function() {
    console.log('Server detected button 3');
  });
  socket.on('b3', function(data) {
    console.log(data + ' server side');
  });
});

app.io.on('connection', function (socket) {
  socket.on('b4', function (data) {
    console.log(data);
  });
});
