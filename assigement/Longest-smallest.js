// let a=[10,9,8,1,17,6,5]
// let b=a.sort((c,d)=>c-d);
// let c=b[0]                         //Smallest number
// // let c=b[a.length-1];                  //Longest number
// console.log(c);
// max no
let a=[10,9,8,1,17,6,5];
let b=0;
for(let i=0;i<a.length-1;i++){
    if (a[i]>b)
    b=a[i]
}
console.log(b);



// smallest
let a=[10,9,8,1,17,6,5];
let b=a[0];
for(let i=0;i<a.length-1;i++){
    if (a[i]<b)
    b=a[i]
}
console.log(b);