// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();

module.exports = function(ee) {
  return ee.on('f1 test', function(data) {
    console.log('Inside f2');
    console.log(data);
    ee.emit('test done');
  });
};
