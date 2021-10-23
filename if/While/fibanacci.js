//Write  a program to print fibonacci number series upto a given numbers // 
let n1 = 0, n2 = 1, nextTerm;
let number=7;
console.log('Fibonacci Series:');
for (let i = 1; i <=7; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}