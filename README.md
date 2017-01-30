# window-scroller

## Credit:

@shunryu111 <http://stackoverflow.com/users/2630316/shunryu111>

## Based on:

<http://stackoverflow.com/a/26798337/5068410>

## install

```javascript
npm install window-scroller --save
```

## usage

```javascript
import Scroller from 'window-scroller';
OR
const Scroller = require('window-scroller');

Scroller.to(500).scroll()
Scroller.to(500).speed(700).scroll()
Scroller.to(500).easing('easeOutSine').scroll();
Scroller.to(500).speed(700).easing('easeInOutSine').scroll();

const element = document.getElementById('rolling');
Scroller.to(element).scroll()
Scroller.to(element).speed(700).scroll()
Scroller.to(element).easing('easeInOutQuint').scroll();
Scroller.to(element).speed(700).easing('easeInOutQuint').scroll();
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
