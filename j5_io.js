var five = require('johnny-five');

var j5Led = module.exports = function(opts) {
  var opts = opts || {};
  var pin = opts.pin || 13;
  this._led = new five.Led(pin);
};

j5Led.prototype.on = function(cb) {
  this._led.on();
  if(cb) {
    cb();
  }
};

j5Led.prototype.off = function(cb) {
  this._led.off();
  if(cb) {
    cb();
  }
};
