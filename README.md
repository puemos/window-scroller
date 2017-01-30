# window-scroller

## Credit:

@shunryu111 <http://stackoverflow.com/users/2630316/shunryu111>

## Based on:

<http://stackoverflow.com/a/26798337/5068410>

## install

```bash
npm install window-scroller --save
```

## usage

```javascript
import Scroller from 'window-scroller';
// OR
const Scroller = require('window-scroller');

// Position
Scroller.to(500).scroll()
Scroller.to(500).speed(700).scroll()
Scroller.to(500).easing('easeOutSine').scroll();
Scroller.to(500).speed(700).easing('easeInOutSine').scroll();

// Element in the DOM
const element = document.getElementById('rolling');
Scroller.to(element).scroll()
Scroller.to(element).speed(700).scroll()
Scroller.to(element).easing('easeInOutQuint').scroll();
Scroller.to(element).speed(700).easing('easeInOutQuint').scroll();

// Save the scroller and use whenever you need
const rollingScroller = Scroller.to(element).speed(700).easing('easeInOutQuint');
rollingScroller.scroll()

const topScroller = Scroller.to(0).speed(700).easing('easeOutSine');
topScroller.scroll()
```

## options

speed (Integer):

- 0 -> inf

easing (String):

- easeOutSine
- easeInOutSine
- easeInOutQuint

to (Integer | Element):

- DOM Element
- Integer
