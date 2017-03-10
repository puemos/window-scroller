'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var raf = require('raf');
var easingEquations = require('./easingEquations');
var getBoundingClientRect = require('bounding-client-rect');
var Promise = require('bluebird');

var Scroller = function () {
  function Scroller() {
    _classCallCheck(this, Scroller);

    this._scrollTargetY = 0;
    this._speed = 500;
    this._easing = 'easeOutSine';
    this.scrollY = window.scrollY;
  }

  _createClass(Scroller, [{
    key: 'speed',
    value: function speed(_speed) {
      this._speed = _speed;
      return this;
    }
  }, {
    key: 'easing',
    value: function easing(_easing) {
      this._easing = _easing;
      return this;
    }
  }, {
    key: 'to',
    value: function to(_to) {
      this._scrollTargetY = _to instanceof Element ? this.getNodeTop(_to) : _to;
      return this;
    }
  }, {
    key: 'time',
    value: function time() {
      this._time = Math.max(.1, Math.min(Math.abs(scrollY - this._scrollTargetY) / this._speed, .8));
    }
  }, {
    key: 'getNodeTop',
    value: function getNodeTop(node) {
      return node.offsetTop;
    }
  }, {
    key: 'scroll',
    value: function scroll() {
      var _this = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.scrollY = window.scrollY;
      this.time();
      var currentTime = 0;
      var tick = function tick() {
        currentTime += 1 / 60;

        var p = currentTime / _this._time;
        var t = easingEquations[_this._easing](p);

        if (p < 1) {
          raf(tick);
          window.scrollTo(0, _this.scrollY + (_this._scrollTargetY - _this.scrollY) * t);
        } else {
          window.scrollTo(0, _this._scrollTargetY);
          cb();
        }
      };
      tick();
    }
  }]);

  return Scroller;
}();

module.exports = new Scroller();