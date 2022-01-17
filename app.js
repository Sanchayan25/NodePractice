function sayHello(name){
console.log('Hello'+name);
}
// console.log(window); This statement if uncommented, will throw an exception: window is not definded; this is becasue in Node we donot have window/document objects. They are part of the runtime environment that we get with browsers
sayHello('Sanchayan');