/* _____HTTP Module______
Note: A bunch of Node's core funtionality is based on EventEmitter. (ex:  Class: net.Server)
Used for creating Networking applications.

Every time we create a new connection, the server raises an Event. We use the on() method to handle the event.
The server object raises different kind of events that you can respond to.
*/
const http= require('http');
const server= http.createServer(); //Class: http.Server inherits from net.Server. So here the server object is an EventEmitter. So it has all the properties that we saw under EventEmitter module

//Register a LISTENER
server.on('connection',(socket)=>{ //Name of the event is connection, and you can find that in the documentation. The second argument is the Callback funtion which here is further converted to arrow functionality.
    console.log('New Connection');
}
); 

server.listen(3000); //Server listens for requests in this port 3000
console.log('Listening on port 3000.')