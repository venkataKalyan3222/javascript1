const Address=require('./Address');  // for Import
// const Customer=require('./Customer');  //For Import
class Creditcard{
  constructor(a,b,c){
  this.eligible=a;
  this.address=b;
  this.dummyCust=c;
}
}
// let c2=new Creditcard('eligible',new address(102,'jayanagar','Marathali',50006,'karnataka','near cheruvu gattu'));
let c2=new Creditcard('kalyan',101,25,new Address(14,'marathali','Bangalore',56000,'karnataka','marathali bridge'));
console.log(c2);


