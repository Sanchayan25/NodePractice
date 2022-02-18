//______Simple Logger module with Raise Event Funtionality_____________

//These two lines bring the EventEmitter to the module
const EventEmitter=require('events');
// const emitter = new EventEmitter(); This emitter is no longer required after the introduction of the Logger class here

var url = 'http://mylogger.io.log';


/*Before Class implementation, this was the funtion used:
    function log(message)
    {
        console.log(message);

        // Now we also raise an event under this module:
    emitter.emit('messageLoggedByLogger2',{id:1,url:'http://'});
    } 

module.exports.logOuter=log; This was inititally correct for the log funtion defined above.
*/



//Note: when we define a function in a class, we do not need the funtion keyword
class Logger extends EventEmitter{ //This extends keyword helps the Logger Class to have all the capabilities of the EventEmitter
    log(message)
    {
        console.log(message);

        // Now we also raise an event under this module:
    this.emit('messageLoggedByLogger2',{id:1,url:'http://'});
    } 
}

module.exports=Logger; // this should now match the class name