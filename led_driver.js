var Device = require('device');
var util = require('util');

var LED = module.exports = function(opts) {
  Device.call(this);

  if(!opts && !opts.io) {
    this.log('Device needs io options set.');
  } else {
    this._io = opts.io;
  }
};

LED.prototype.init = function(config){
  var self = this;

  config
    .type('led')
    .name('My LED')
    .state('off')
    .when('on', { allow: ['turn-off'] })
    .when('off', { allow: ['turn-on'] })
    .map('turn-on', function(cb) {
      self._io.on(function(err) {
        if(err) {
          cb(err);
        } else {
          cb();
        }
      });
    })
    .map('turn-off', function(cb) {
      self._io.off(function(err) {
        if(err) {
          cb(err)
        } else {
          cb();
        }
      });
    });
};
