# Scrollio

Scrollio was designed to be a slim yet extensible smooth scrolling solution.

It aims to solve one thing, and one thing only:

creating a jank-free smooth scroll which can be controlled by either one of the provided easing functions, or by user-provided a custom one.

## Why is it headless?
Scrollio exposes its entire internal API in order for you to use in your own solution.
It comes with a usable [example](src/scrollTo.ts) function in order to provide a possible solution, yet the use of it is not mandatory.

## Getting Started

```
# Get scrollio from npm
npm i scrollio-js

# Import either Scrollio or one of its subset functions
import {Scrollio} from "scrollio";

# Get started with an example configuration

const scrollio = new Scrollio({
  scrollElement: elementRef,
  duration: 800,
  easingFunction: "easeInOutQuad"
});

# Scroll somewhere!
scrollio.scrollTo(250);

```

## Documentation
Please refer to [API.md](API.md)

### Prerequisites

Mke sure your target browsers support es6, otherwise:

```
# Manually clone the project
git clone

# Change tsconfig.jsons' target entry
-      "target": "ES6",
+      "target": "ES5",
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Typescript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 
* [Webpack](https://webpack.js.org/) - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Contributing
Just send a PR, no fancy rules here.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Michael Katz** - *Initial work* - [silicakes](https://github.com/silicakes)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Big thanks for [yukulele](https://github.com/yukulele) and [gre](https://github.com/gre) whose gists inspired parts of this solution.


### TODOS
- Support x position scrolling (breaking change)
- Add an onScroll event (currently polyfillable with `scrollElement.addEventListener("scroll", () => {...})`), consider using ReadableStream (similar to the fetch API)
- Add testing