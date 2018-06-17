# Scrollio API

## Scrollio class

### initialization
```
//import
import { Scrollio } from "scrollio";

//initialization
const scroll = new Scrollio({
  scrollElement: document.body, //A scrollable HTML Element
  easingFunction: "easeInOutQuad", // easing preset or your own
  duration: 400 // the time(ms) it should take for the transition to finish
});
```

### Public methods

```
scroll.getEasingFunction() // function() {...}
scroll.setEasingFunction(preset|function) // will set a new easing function from a preset or as the provided function

scroll.getScrollElement(); // returns a scrollable HTML Element 
scroll.setScrollElement(element); // sets a new scrolling element

scroll.getDuration(); // returns the defined duration of the scroll
scroll.setDuration(number); // sets a new scroll duration in milliseconds

scroll.scrollTo(position); //the position = Y position in px; returns a promise which fulfills once the transition ended.

```

### Granular constructs (internal API)
Part of Scrollios philosophy is to provide the building blocks necessary to create your own scrolling libraries, similar to bootstrap's scrollSpy or jquery's good ol' smoothScroll.

With that in mind, here's the internal API:

#### easeIn / easeOut / easeInOut abstractions
```
import { easeIn, easeOut, easeInOut} from "scrollio";
```
Returns an easing **function**.

These easing functions receive a 'power' value which creates the dimension of the function.
In the most basic form, it's the building block of all of scrollios' easing presets:

```
const easeOutQuad = easeOut(2); 
const easeInOutCubic= easeInOut(3);
```

`easeOutQuad` and `easeInOutCubic` are functions accepting a 0-1 value:

```
easeInOutCubic(.3); //0.108
```

\* For more examples, please review some of the [implementated functions](src/implementation/index.ts)

Here's a quick [primer](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing)


#### scrollTo
```
import {scrollTo, easeInOutQuint} from "scrollio";

const element = document.body; // a scrollable HTML element
const to = 1000; // desired destination of scrolling
const duration = 1200; // duration of the scroll
const easingFunction = easeInOutQuint; //one that's provided by the library, or your own.

scrollTo(element, to, duration, easingFunction).then(() => {
  console.log("finito!")
});

export declare function scrollTo(scrollElement: Element, to: number, duration: number, easingFunction: EasingFunction): Promise<void>;

```
#### Easing presets to be used inside the class initializer
"linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint"


### class options

```
interface Options {
    scrollElement: Element;
    easingFunction: DefaultEasingFunction | EasingFunction;
    duration: number;
}
```

### Easing Functions
Scrollio exposes its entire easeing function implementation so that they can be used outside of the library, have a look [here](src/implementation/index.ts).





