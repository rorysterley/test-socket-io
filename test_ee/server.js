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

// End Socket.io

var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();
var final;

var res = function(value) {
  console.log('value: ', value);
  value.p2()
  .then(function(stuff) {
    console.log('stuff: ', stuff);
    stuff.p3()
    .then(function(things) { console.log(things); })
    .catch(function(reason) {console.log('reason: ' + reason); });
  })
  .catch(function(reason) { console.log('reason: ' + reason); });
  return value;
};

var p1 = new Promise(function(resolve, reject) {
  var c = {
    p2: function() {
      return new Promise(function(resolve, reject) {
        var z = {
          p3: function() {
            return new Promise(function(resolve, reject) {
              ee.on('z-resolve', function() { resolve('z resolve'); });
              ee.on('z-reject', function() { reject('z reject'); });
            });
          }
        };

        ee.on('inner-resolve', function() { resolve(z); });
        ee.on('inner-reject', function() { reject('inner reject'); });
      });
    }
  };

  ee.on('outer-resolve', function() { resolve(c); });
  ee.on('outer-reject', function() { reject('outer reject'); });
});

p1
.then(res)
.catch(function(reason) {
  console.log(reason);
});

setTimeout(function() {
  ee.emit('outer-resolve');
  // ee.emit('outer-reject');
}, 1000);

setTimeout(function() {
  ee.emit('inner-resolve');
  // ee.emit('inner-reject');
}, 2000);

setTimeout(function() {
  ee.emit('z-resolve');
  // ee.emit('z-reject');
}, 3000);
