/* ______________Loading a Module_______________ */

// require() funtion takes 1 argument of the name or path of the target module we want to load. It required() funtion returns the object that is exported from the target module 
const logger = require('./logger'); //we use the relative path to the module. 
//OUPUT: { logOuter: [Function: log] } . 

// From the ouput, it implies the returned object logOuter has a single funtion named log; so we can call that funtion from this module )
logger.logOuter('Sample Message from app2.js');

// OUTPUT:Sample Message from app2.js

/* NOTE 1: For recent versions of javascript, we define constants. In this case, instead of var logger= require..., it should be 'const logger'. This is to prevent accidental override by assignment of this variable.
Using var will throw an error that is difficult to figure out for overwriting. However, using const throws an error which tells that the contant has be assigned again.
Further, there are tools that can check errors in such cases. Using constructs properly, we can prevent errors at runtime. Ex: cmd>jshint app2.js 

NOTE 2: For the case where no object is exported in logger.js, instead the funtion is:
const logger = require('./logger');
logger.('Sample Message from app2.js')
*/


