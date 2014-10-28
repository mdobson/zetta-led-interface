var Scout = require('zetta-scout');
var util = require('util');
var five = require('johnny-five');
var j5Led = require('./j5_io');
var Led = require('./led_driver');

var LedScout = module.export = function() {
  Scout.call(this);
};
util.inherits(LedScout, Scout);

LedScout.prototype.init = function(next) {
  var self = this;
  var board = new five.Board();
  board.on('ready', function() {
    var led = new j5Led({pin: 13});
    self.discover(Led, { io: :led });
  });
  
};
