// let a=[1,2,3,4,5];    
let a="noon"                 
// let b=[];
let b="";
for(let i=a.length-1;i>=0;i--){
    b=b+a[i]
}
console.log(b);
if (a==b){
    console.log("yes,it is a palindrome");
}
else{
    console.log("No.it is not a palindrome");
}