// let a = 600;
// class Test {}
// function add() {
//   return false;
// }
// module.exports = { a, Test, add };    //ES5 named export
//export {}; // ES6 - named export
/*
What is the way you exported , same way we need to import
*/
function add(a,b,c,...d){
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)  
  
}
add(10,20,30,40,50,60,70)

// output:
// 10
// 20
// 30
// [ 40, 50, 60, 70 ]

  