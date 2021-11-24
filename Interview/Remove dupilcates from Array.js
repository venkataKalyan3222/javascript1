//Remove dupilcates from Array//
// let array=[1,2,4,6,3,4,32,24,2,3,'name']
// let array1=[... new Set(array)];       //Spread operator and Set 
// console.log(array1);



let array=[1,2,3,4,5,1,2,3]
let array1=[...new Set(array)]
console.log(array1)
