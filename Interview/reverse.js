// function reverseNum(n) {
//     let a = n.toString().split('').reverse().join('');
//     return Math.sign(n) * parseInt(a);
//   }
//   let z=reverseNum(234)
// console.log(z);


// Another way

function add(n){
    n=n+'';
    return n.split('').reverse().join('');

}let z=add(345);
console.log(z);
