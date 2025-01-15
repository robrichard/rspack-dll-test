Build with dll and dll reference plugin: `npm run build`

```
$ npm run build                                                      

> rspack-dll-test@1.0.0 build
> rspack build -c ./config/rspack.dll.config.js && rspack build -c ./config/rspack.dllRef.config.js

Rspack compiled successfully in 141 ms
ERROR in ./src/entry.js
  × ESModulesLinkingError: export 'readInlineData' (imported as 'readInlineData') was not found in 'relay-runtime' (module has no exports)
   ╭─[3:12]
 1 │ import { readInlineData } from 'relay-runtime';
 2 │ 
 3 │ console.log(readInlineData)
   ·             ──────────────
   ╰────


Rspack compiled with 1 error in 13 ms
```

Build without dll: `npm run build:nodll`

```
$ npm run build:nodll                                                

> rspack-dll-test@1.0.0 build:nodll
> rspack build -c ./config/rspack.config.js

Rspack compiled successfully in 171 ms

```
