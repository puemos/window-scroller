const getBoundingClientRect = require('bounding-client-rect');
const scrollToY = require('./scrollToY');

const scrollToElem = {
    constructor() {
        this.speed = 2000;
        this.easing = 'easeOutSine';
    }
    speed(speed) {
        this.speed = speed;
        return this;
    }
    easing(easing) {
        this.easing = easing;
        return this;
    }
    to(node) {
        this.node = node;
        return this;
    }
    scroll() {
        const {
            top
        } = getBoundingClientRect(this.node);
        scrollToY
            .to(top)
            .speed(this.speed)
            .easing(this.easing)
            .scroll();
    }
}
