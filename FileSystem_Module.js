/* 
Files System Module - fs module
Note: Almost for all operations under this module, we have options for both Asynchronous and Synchronous methods (which are there for simplicity) in a lot a cases. In a real world application we should use asynchronous methods because these are non-blocking.
For example: access() vs accessSync() operations or readdirSync() vs readdir() method
A Node process has a single thread. If you keep it blocked by using synchronous methods, you will not be able to serve many clients 
*/

const fs=require('fs'); //header imported and stored in a variable


//Synchronous function example for readdir():



const files1=fs.readdirSync('./'); //This will return all the files and folders in the current folder. Note: this synchronous form is easier to understand
console.log(files1);



/*

Asynchronous funtion:
All asynchronous methods takes an additional function as their last argument known as the CALL BACK. Node calls this function once the asynchronous funtion completes execution.
For example: For readdir(),the first argument is the path and the second argument is the callback argument that in-turn takes 2 arguments: Error and Variable (to store the result). In the following example, we take the variable as a string array named as "files2".
Only one of these 2 arguments shall have a value at a time; the other shall be Null. That is, it will either have an error or some value stored in files2.
*/

//The following example has simple error handing included in the Call Back funtion itself
fs.readdir('./', function(err, files2){
    if(err) console.log('Error',err);
    else console.log('Result:',files2); //if no error - print result
}); // end of the readdir() function