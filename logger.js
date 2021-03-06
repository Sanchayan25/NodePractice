/* Objective: Modularity. To create a module for login messages. We will use remote logins by websites that let us log messages in the cloud using http requests. We will only focus on modularity here, and not the details of sending this http request */
var url = 'http://mylogger.io.log';

function log(message)
{
    //Instead of actually sending an HTTP request, we will log it in console
    console.log(message);
} 

/* We need to ensure that the log funtion is public to be able to access it from app.js
We will utilize the exports: {} property of Node to do it */


module.exports.logOuter=log;

/* We are adding a method called log to the export object logOuter. Note that the name of the object "logOuter" (on the left of =) can be set to anything and needs to be referenced by that name wherever it is used. The second "log" refers to the internal log

module.exports.endPoint=url;
Another example of a public object name for an internal variable. 
We commented it as it is an implementation detail, and should not be public.


Note: In this case, there is just one method, so instead of calling the object from some other module, we can export the method itself.

module.exports=log;

*/


