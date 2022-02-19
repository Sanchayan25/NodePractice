/* ________Basics of Raising and Listening to Events:_________________
Event: It is a signal that something has happened in the application

In Node, we have a class called HTTP that can be used to build a web server. 
So we listen to requests on a particular port, and everytime we receive a request on that port, that HTTP Class raises an EVENT!
Possible Event in this case for example: New Request
Our job is to read that event and respond to the same.
*/

const EventEmitter=require('events');  /* by convention, the usage of Caps in EventsEmmiter indicates that the constant is a class. 
This statement will ensure that you can further use this contant EventEmitter to call the methods available under Node.js> Events Module (the EventEmitter class is already present under this).
Geek for Geeks: "The EventEmmitter class-> All objects that emit events are instances of the EventEmitter class. The event can be emitted or listen to an event with the help of EventEmitter.""

*/

const emitter = new EventEmitter(); //In order to use the EvenEmitter, we need to create an INSTANCE OF CLASS - Object


//_____REGISTER A LISTENER_____________
// emitter.addListener(event, listener) - this method could have been used; instead we use a more convenient alias for this (similar to that used in Ajax):
emitter.on('messageLogged',function(){ //firt argument is the name of the event and second argument is the funtion that gets called on the event trigger. the "funtion" is a keyword. Syntax: eventEmitter.on(event, listener)
console.log('Listener called');
}); 



/* In case of using Events-Argument (as described further below), Listener should also be receiving the events arguments. */

 emitter.on('messageLogged2',function(arg){ //We can name the argument anyway. Conventionally, people either use arg/e/eventArg. 
    console.log('Listener called:', arg); })
 
 /* We can further simplify this above statement by using the arrow function from ES6:  emitter.on('messageLogged2', (arg) => {console.log('Listener called:', arg); }) 



//To RAISE AN EVENT:
emitter.emit('messageLogged'); //emit is a predefined method under the EventEmitter class. It is used as a signal for the listener. messageLogged is the name given to the Event.
/* If the program is run without the listener, it shall not produce any effect. This is because there is no listener in that case.
The order of Listener and Emitter is important. When the emitter is called, it iterates over all registered Listeners and calls them synchronously.

/* 
___EVENTS ARGUMENTS_____:
When raising an event, the client side can send additional arguments (event arguments) about that event.
Example:
emitter.emit('messageLogged', 1, 'url');  1 here is the id.

If you want to send multiple arguments, encapsulating them inside an object would be the best way to do it.
So:
*/

emitter.emit('messageLogged2', {id:1, url:'http://'}); // This object under {} is the event argument