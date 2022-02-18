// OS Module:

const os = require('os');

var totalMemory=os.totalmem();
var freeMemory =os.freemem();

console.log('Total Memory: '+ totalMemory);

/* Alternate approach to simplify this expression without concatenation:
Using Template string available with newer version of Javascript - called ES6 (ECMAScript 6)
*/

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/*Output:
C:\Users\Dell\NodeFirst-app>node OS_Module.js
Total Memory16959660032
Total Memory: 16959660032
Free Memory: 8940507136
*/
