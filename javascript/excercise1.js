function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var c = a;
  console.log(`The value of c currently is ${c}`);
  var a = b;
  console.log(`The value of a currently is ${a}`);
  var b = c;
  console.log(`The value of b currently is ${b}`);

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

console.log(test());
