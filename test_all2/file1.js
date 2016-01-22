// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();


module.exports = function(ee) {
  return function() {
    console.log('Inside test');
    ee.on('f1 test', function() { console.log('testing'); });
    ee.emit('f1 test', { data: 'f1 test data'});
  }
};
