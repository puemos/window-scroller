const raf = require('raf');
const easingEquations = require('./easingEquations');
const getBoundingClientRect = require('bounding-client-rect');
const Promise = require('bluebird');

class Scroller {

  constructor() {
    this._scrollTargetY = 0;
    this._speed = 500;
    this._easing = 'easeOutSine';
    this.scrollY = window.scrollY;
  }
  speed(speed) {
    this._speed = speed;
    return this;
  }
  easing(easing) {
    this._easing = easing;
    return this;
  }
  to(to) {
    this._scrollTargetY = (to instanceof Element) ? this.getNodeTop(to) : to;
    return this;
  }
  time() {
    this._time = Math.max(.1, Math.min(Math.abs(scrollY - this._scrollTargetY) / this._speed,
      .8));
  }
  getNodeTop(node) {
    return node.offsetTop;
  }
  scroll(cb = () => {}) {
    this.scrollY = window.scrollY;
    this.time();
    let currentTime = 0;
    const tick = () => {
      currentTime += (1 / 60);

      let p = currentTime / this._time;
      let t = easingEquations[this._easing](p);

      if (p < 1) {
        raf(tick);
        window.scrollTo(0, this.scrollY + ((this._scrollTargetY - this.scrollY) * t));
      } else {
        window.scrollTo(0, this._scrollTargetY);
        cb();
      }
    };
    tick();
  }
}
module.exports = new Scroller();