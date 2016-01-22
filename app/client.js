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

var button4 = function() {
  console.log('Detected button 4');
  socket.emit('b4', { my: 'data 4' });
};

var button5 = function() {
  console.log('Detected button 5');
  socket.emit('button 5', { my: 'data 5' });
  socket.emit('b3', { my: 'date from b5 as b3'});
};
