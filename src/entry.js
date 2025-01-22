import { readInlineData } from 'relay-runtime';
import { myFunction } from './dllModule';
import _extends from '@babel/runtime/helpers/esm/extends';

console.log(readInlineData);
_extends({}, {foo: 'bar'});
myFunction();
