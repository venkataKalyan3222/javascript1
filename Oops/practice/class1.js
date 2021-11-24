// class Bank{
//     min_bal=500;
//     constructor(a,b,c) {
//         this.account_name=a;
//         this.account_no=b;
//         this.amount=c;
//     }
//         open_Account(){
//             console.log("open account succesfully")
//         }
//         deposit(){
//             console.log(this.amount+500)
//         }

        
//     }
// class savings_bank extends Bank{
//     constructor(a,b,c,d) {
//         super(a,b,c);
//         this.sum=d;
        
//     }
// } 
// let c1=new savings_bank("kalyan",101,1000,5000);
// console.log(c1);
// c1.open_Account();
// c1.deposit();
// console.log(c1.account_name);




/* let product={
    product_name:"Santoor",
    product_cost:20,
    product_color:"yellow",
    product_size:"medium",
};
console.log(Object.keys(product));// Object--> O is caps    */


 //difference of let,var,const//can't be reassign
const x=10;          
console.log(x);
x=20;
console.log(x);
