const EventEmitter=require('events');
//const emitter = new EventEmitter();  
/* If this above emitter object is used, we shall not have any output from the Listener. This is because this object then, would be a separate object altogether (compared to the emitter obj from Logger_with_Event)
So we avoid the use of such emitter objects everywhere. Instead we make a class (refer Logger_with_Events.js) and use the implementation
*/

/* _______LISTENER before class implementation______
emitter.on('messageLoggedByLogger2',function(){
    console.log('Listener called');
    });
*/

/* Before Class implementation in Logger_with_Events file:
 Here we need to call the logger module from Logger_with_Events

 const log=require('./Logger_with_Event');
log.logOuter('messagePassedFromApp3');

*/

//After class impletentation in Logger_with_Events.js file:

const Logger=require('./Logger_Extends_Event'); //use of caps would denote the involvement of of a class
const loggerObj = new Logger();

loggerObj.on('messageLoggedByLoggerWithEvent',function(arg){
    console.log('Listener called successfully.',arg);
    }); 

loggerObj.logUserDefined('TestingLoggerEvents');  //Note how the Logger object of LoggerClass 