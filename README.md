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
Uncaught SyntaxError: Unexpected token '.' (at main.js:4:90)
```

Generated code:

```js
(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./node_modules/relay-runtime/index.js": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__(/*! dll-reference my_dll */ "dll-reference my_dll")(./node_modules/relay-runtime/index.js);
```

Note unquoted string reference `(./node_modules/relay-runtime/index.js);`
