class Bank{
    min_bal=500;
        constructor(a,b,c){
        this.account_name=a;
        this.account_no=b;
        this.amount=c;
    }
    open_account(){
        // let name1="raju"
        console.log("Accouont is open succesfully");
        // return name1;
    }   
}
class savings_account extends Bank{
    constructor(a,b,c,d,e){
        super(a,b,c);
        this.bal_current=d;
        this.bal_remaining=e;

    }
    get_currentBalance(){
        return this.bal_current +100;

    
    }
   withdraw(){
       return this.bal_current-300;
   }
    colse_Account(){
        return this.bal_remaining +=100;

    }
    
}
let c1=new savings_account("kalyan",100,3200,23000,24000);
console.log(c1);
// console.log(c1.min_bal);
// console.log(c1.account_name);
// console.log(c1.account_no);
// console.log(c1.amount);
// console.log(c1.open_account());
// console.log(c1.bal_current);
// console.log(c1.bal_remaining);
// console.log(c1.get_currentBalance());
// console.log(c1.withdraw());
// console.log(c1.account_name,c1.amount,c1.open_account());
// console.log(c1.open_account());