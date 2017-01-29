module.exports = {
    easeOutSine: function(pos) {
        return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function(pos) {
        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: function(pos) {
        if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
};
