const raf = require('raf');
const easingEquations = require('./easingEquations');

const scrollToY = {

    constructor() {
        this.scrollTargetY = 0;
        this.speed = 2000;
        this.easing = 'easeOutSine';
        this.currentTime = 0;
        this.scrollY = window.scrollY;
        this.scrollTo = window.scrollTo;
        this.time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
    }
    speed(speed) {
        this.speed = speed;
        return this;
    }
    easing(easing) {
        this.easing = easing;
        return this;
    }
    to(scrollTargetY) {
        this.scrollTargetY = scrollTargetY;
        return this;
    }
    scroll() {
        this.tick();
    }
    tick() {
        this.currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
            raf(tick);
            this.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            this.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            this.scrollTo(0, scrollTargetY);
        }
    }
}
module.exports = scrollToY;
