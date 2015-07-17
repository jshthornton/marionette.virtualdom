var mixin = require('./view-mixin');
var _ = require('lodash');

var Cls = function() {};

_.extend(Cls.prototype, mixin);

module.exports = Cls;