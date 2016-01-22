
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on('test done', function() { console.log('test done Kinda'); });

var file1 = require('./file1')(ee);
var file2 = require('./file2')(ee);

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





file1();
ee.on('test done', function() { console.log('test done'); });
