function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var c = a;
  console.log(a);
  var a = b;
  console.log(b);
  var b = c;
  console.log(c);

  console.log(a, b);

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

console.log(test());
