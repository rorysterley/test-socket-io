// Socket.io
var socket = io.connect();
socket.on('news', function (data) {
  console.log(data);
  socket.emit('button 1', { my: 'data' });
});

var button1 = function() {
  console.log('Detected button 1');
  socket.emit('button 1', { my: 'data 1' });
};

var button2 = function() {
  console.log('Detected button 2');
  socket.emit('button 2', { my: 'data 2' });
};

var button3 = function() {
  console.log('Detected button 3');
  socket.emit('button 3', { my: 'data 3' });
};

socket.on('b3', function(data) {
  console.log(data + ' Client Side');
});


// socket.on('button 1', function() { console.log('button 1 event detected'); });

// End Socket.io

// Socket.io will not detect eventEmitter events. Only events emmited over socket
socket.on('e1', function() {
  console.log('e1 from server'); // Never work (:
});
