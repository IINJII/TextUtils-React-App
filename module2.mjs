import nj from './module1.mjs';    // If we are importing a thing which is default using named export then we can import that thing with any name as we can see in this line we have imported d from module1 as nj.
import {a, b, c} from './module1.mjs';    // If we are importing a thing which is exported using named export then we have to use the same name as that of the exported variable and we have to enclose verything inside curly braces.

console.log(nj);
console.log(a);
console.log(b);
console.log(c);