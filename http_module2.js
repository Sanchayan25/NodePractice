/* ______ HTTP Module further explained _________

Note: In real world, we shall not respond to a Connection event to build an Http service (as seen under http_module1.js) as that is very low level and explained just for simplicity and understanding.
Here, instead of connection event, we pass a callback function to the server : funtion (req,res) and we add Routes linearly under it.

*/

const http= require('http');
const server= http.createServer((request,response)=>{ //Not the arguments can be named anything. They will just act like the response/request in here
// under this Call Back funtion, instead of playing with the socket we work on actual response or request object 
if (request.url === '/'){
   response.write('Hello World');
   response.end();
}

//return a list of courses from the data base via JSON (here we just pass an array of numbers for simplicity)
if(request.url === '/api/courses')
{
   response.write(JSON.stringify([1,2,3])); // this JSON.Stingify() converts the array into JSON syntax
   response.end();
}

});


server.listen(3000); //Server listens for requests in this port 3000
console.log('Listening on port 3000.')

/* Drawback of this approach: as we add more routes linearly to the call back funtion, the program becomes more complex. Express framework helps us deal with this */