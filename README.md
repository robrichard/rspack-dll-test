Build with dll and dll reference plugin: `npm run build`

```
$ npm run build                                                       

> rspack-dll-test@1.0.0 build
> rspack build -c ./config/rspack.dll.config.js && rspack build -c ./config/rspack.dllRef.config.js

Rspack compiled successfully in 67 ms
Rspack compiled successfully in 12 ms
```

Open `public/index.html` in a browser and see in the console:

```
main.js:12 Uncaught ReferenceError: module is not defined
    at 960 (main.js:12:1)
    at __webpack_require__ (main.js:39:30)
    at main.js:111:87
    at main.js:120:3
    at main.js:122:3
```

Generated code:

```js
(() => { // webpackBootstrap
var __webpack_modules__ = ({
"622": (function (module, __unused_webpack___webpack_exports__, __webpack_require__) {
module.exports = __webpack_require__(/*! dll-reference my_dll */ 94)(1847);

}),
"334": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__(/*! dll-reference my_dll */ 94)(4311);

}),
"960": (function (__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {
module.exports = __webpack_require__(/*! dll-reference my_dll */ 94)(6019);

}),
"94": (function (module) {
"use strict";
module.exports = my_dll;

}),

});
```

Note in "960", module.exports is referenced, while the module arg is `__webpack_module__`
