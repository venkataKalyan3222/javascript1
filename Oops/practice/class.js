class Bank{
    min_bal=500;
    constructor(a,b,c,d){
        this.account_Name=a;
        this.account_no=b;
        this.amount=c;
        this.cheque_no=d;
    }
    account_open(){
    console.log("open account successfully");
    }
}
class savings_account extends Bank{
    constructor(a,b,c,d,e){
        super(a,b,c,d);
        this.rem_balance=e;
        
    }
    deposit(){
        return this.amount +1000;
    }
    withdraw(){
        return this.amount +5000;
    }
    current_bal(){
        return this.rem_balance +1000;
        
    }

}
let c1=new Bank("kalyan",101,4000,123,1234);
console.log(c1);
// console.log(c1.min_bal);
// console.log(c1.sal);
// c1.account_open();
// c1.deposit();
// console.log(c1.withdraw());
// console.log(c1.rem_balance());
// console.log(c1.current_balance());
