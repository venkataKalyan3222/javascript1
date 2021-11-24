/* var a = 100; // global
var b = 200; // global
function add() {
  let c = 300;
  b = 210;
  d = 400;
  console.log(b);
  console.log(c);
  function test() {
    let e = 500;
    console.log(e);
    
  }
  test();
}
add();
console.log(a);
console.log(b);
//console.log(c);
console.log(d);//
//console.log(e);


 */


// var array=[0,0.35,2,4,8,7]
// var new_array=array.find(function(element){
//   return element>0
// })
// console.log(new_array)


console.log(1+"2"+"2")
console.log(1+ +"2"+2)
console.log(1>2<3)
console.log(+"2"+2+"1")
var a=3 
var b=4
var c=5
var result=c+b+"kalyan"+a+b;
console.log(result)

// let string="kalyan";
// let z=string.split("");
// console.log(z)

// let string = 'ABCDEFG';

// // splits every letter in string into an item in our array
// let newArray = string.split('');

// console.log(newArray);
// var array=[0,0.35,2,4,8,7]
// var array=[]
// let z=array.join('').toString()
// console.log(z)