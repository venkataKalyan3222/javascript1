//Write  a program to print reverse of digits of numbers //
// var i=123;rev=0;
// while(i>0){
//     if(rem=i%10)
//     i=(rev*10)+rem;
// }

// Another  way
function add(n){
    n+='';
    return n.split('').reverse().join('');

}let z=add(931);
console.log(z);