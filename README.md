

# Scrollio
[![scrollio version](https://img.shields.io/badge/dynamic/json.svg?label=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsilicakes%2Fscrollio%2Fmaster%2Fpackage.json&query=version)](https://www.npmjs.com/package/scrollio-js)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://www.npmjs.com/package/scrollio-js)

[![Typescript version](https://img.shields.io/badge/Typescript-2.9-blue.svg)](https://www.npmjs.com/package/scrollio-js)
[![npm Version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/scrollio-js)
[![build: passing](https://img.shields.io/badge/'build'-passing-brightgreen.svg)](https://www.npmjs.com/package/scrollio-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

Scrollio is a slim yet extensible smooth scrolling solution.

It aims to solve one thing, and one thing only:

creating a jank-free smooth scroll which can be controlled by either one of the provided easing functions, or by a user-provided one.

## Why is it headless?
Scrollio exposes its entire internal API to be used in your own project.
It comes with a usable [example](src/scrollTo.ts) function in order to provide a possible solution, yet the use of it is not mandatory.

## Getting Started

```sh
# Get scrollio from npm
npm i scrollio-js

```

```ts
# Import either Scrollio or one of its subset functions
import {Scrollio} from "scrollio-js";

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

Make sure your target browsers support es6, otherwise:

```sh
# Manually clone the project
git clone https://github.com/silicakes/scrollio.git

# Change tsconfig.jsons' target entry
-      "target": "ES6",
+      "target": "ES5",

# build the project
npm run build

#use main.js with your solution.
```

## Built With

* [Typescript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 
* [Webpack](https://webpack.js.org/) - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Contributing
Just send a PR, no fancy rules here.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/silicakes/scrollio/tags). 

## Authors

* **Michael Katz** - *Initial work* - [silicakes](https://github.com/silicakes)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Big thanks for [yukulele](https://github.com/yukulele) and [gre](https://github.com/gre) whose gists inspired parts of this solution.


### TODOS
- Demos: Comming soon! I promise()!
- Support x position scrolling (breaking change)
- Add an onScroll event (currently polyfillable with `scrollElement.addEventListener("scroll", () => {...})`), consider using ReadableStream (similar to the fetch API)
- Add testing
