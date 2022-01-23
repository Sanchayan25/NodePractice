
All about Global variables and modularity in Node.

Both Node and Javascript have the following funtions common:

console.log();
setTimeout();
clearTimeout()l;
setInterval();

Now in Browsers (Javascript related), we have this window object that represents Global scope. So all variables and funtions with global scrope can be accessed using this 'window' object.
For Example:
window.console.log();
This above statement is same as console.log() as the Javascript engine will prefix the statement with 'window', because that is where this object is defined. This is the same with all other funtions mentioned above.
Equivalent to this, in Node we have a 'global' object that let's us access everything global (for ex, the funtions mentioned above)

Important Concept:
when we declare a variable, it is also accessible using the window object.
var message=''
window.message;      This is allowed

However, for Node the variables are not added to global object. They remain local
var message=''
console.log(global.message); --> would return "undefined" as message variable is not defined/present globally.
This is Node's modular system.

