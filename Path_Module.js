// Path Module Working
/* When you give argument to require(), NODE assumes that it is a built in funtion
If there is no built in module by the name specified here, then Node looks for the existance of a relative path to a file in this application.
require('../path')=> would therefore mean this is a file in this application
*/

const path =require('path'); //this is an object called path with bunch of useful methods now
var pathObj=path.parse(__filename); //use the default argument __filename
console.log(pathObj);  //to log the object on the console -  NOT WORKING ACCORDING TO EXPECTATION ON THIS SYSTEM


// Same example with the file path defined in a string
path1 = path.parse("/users/admin/website/index.html");
console.log(path1);

console.log(__filename);
