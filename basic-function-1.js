/**
 * This is my BASIC FUNCTION I assignment for the JavaScript section of the Web Fundamentals module of Coding Dojo's Accelerated Flex Bootcamp.
 * 
 */

//1
function a(){
  return 35;
}
console.log(a())
//Prediction: when this function is called, it will return 35 (printed in console);
//Code run: ran as expected, returned 35 printed in console 

//2
function a(){
  return 4;
}
console.log(a()+a());
//Prediction: the function itself returns 4, and console.log will add the returns together, logging 8;
//Code run: ran as expected, when run, code returns 8 as predicted

//3
function a(b){
  return b;
}
console.log(a(2)+a(4));
//Prediction: this takes a number and returns whatever number is given when called. logs this function with 2 as argument added to this function with 4 as argument, logging 6
//Code run: ran as expected, logs 6 to console

//4
function a(b) {
  console.log(b);
  return b*3;
}
console.log(a(3));
//Prediction: function a takes a number, 3, and when run, logs 3 to console, then returns 3*3(9), logging 9 to the console. Final output: 3,9
//Code run: ran as expected logs 3 and then 9 returns 9

//5
function a(b){
  return b*4;
  console.log(b)
}
console.log(a(10));
//Prediction: a takes a number, 10, and returns number *4, 40.
//Code run: ran as expected, returns 40

//6
function a(b){
  if(b<10) {
    return 2;
  }
  else  {
    return 4;
  }
  console.log(b);
}
console.log(a(15));
//Prediction: when function is run with 15 as its argument, it determines if 15 is smaller than 10 and since it isnt, it moves to the else statement, returning 4. that stops the function so the rest is not run.
//Code run: ran as expected, returns 4.

//7
function a(b,c){
  return b*c;
}
console.log(10, 3);
console.log( a(3,10) );
//Prediction: the first console.log will print "10 3" to the console. the next runs the function a with 3 and 10 passed in as arguments, which returns product of the two arguments, 30.
//Code run: ran as expected, prints "10 3" and then returns 30 (which is printed because its ran inside the console.log)

//8
function a(b){
  for(var i=0; i<10; i++){
    console.log(i);
  }
  return i;
}
console.log(3);
console.log(4);
//Prediction: when run, this code will log 3 and then 4 to the console. function is never called. 
//Code run: ran as expected. logging 3 and then 4 to console

//9
function a(){
  for(var i = 0; i < 10; i++){
    i = i +2;
    console.log(i);
  }
}
a();
//Prediction: console will log 2,5,8,11 and it returns undefined because it isnt told to return anything
//Code run: ran as expected

//10
function a(b,c){
  for(var i = b; i < c; i++) {
    console.log{i};
  }
  return b*c;
}
a(0,10);
console.log(a(0,10));
//Prediction: the first time its run, it will console.log numbers 0 - 9 and then return 0. The second time it is run it will console.log numbers 0 -9 and then it will also console.log the return of 0 because function is called  within a log statement.
//Code run: ran in browser console as exepected

//11
function a(){
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      console.log(j);
    }
    console.log(i);
  }
}
//Prediction: if i were to run this code as is, it would not run because function isnt called, 
//Code run: ran as expected when run in browser

//12
function a(){
  for(var i=0;i<10; i++){
    for(var j=0; j<0; j++){
      console.log(i,j);
    }
    console.log(j,i);
  }
}
//Prediction: if i were to run code as is, it would not run because function is never called, 
//Code run: ran as expected in browser

//13
var z = 10;
function a(){
  var z = 15;
  console.log(z);
}
console.log(z);
//Prediction: logs 10 to console because function is never called
//Code run: ran as expected in browswer

//14
var z = 10;
function a(){
  var z = 15;
  console.log(z);
}
a();
console.log(z);
//Prediction: 10, 15 - when run, function will create a var in its local scope (var z = 15) and logs its value to the console(15). then the function is done and the next console log runs and prints 10 to the console because we are outside the function. 
//Code run:

//15
var z = 10;
function a(){
  var z = 15;
  console.log(z);
  return z;
}
z = a();
console.log(z);
//Prediction: 15, 15 - var z is set to 10 globally, z i set to the function a(). within, a var z is set to 15. function console logs 15. returns 15 so the GLOBAL z is set to 15. then it console logs 15 again.
//Code run: ran as expected in the browser.