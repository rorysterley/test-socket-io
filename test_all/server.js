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


var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

setTimeout(function() {
  ee.emit('e1');
}, 1000);

setTimeout(function() {
  ee.emit('e2');
}, 2000);

setTimeout(function() {
  ee.emit('e3');
}, 3000);

ee.on('e1', function() { console.log('e1 detected'); });
ee.on('e2', function() { console.log('e2 detected'); });
ee.on('e3', function() { console.log('e3 detected'); });
