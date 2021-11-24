const Address=require('./Address');      //for Importing
class Customer{
    constructor(a,b,c,d){
        this.Customer_name=a;
        this.Customer_no=b;
        this.Customer_age=c;
        this.Address=d;   
    }
}
let c1=new Customer(101,'kalyan',25,new Address('14','marathali','Bangalore',56000,'karnataka','marathali bridge'));
console.log(c1);

module.export=Customer;
// const Address=require('./Address');
