class Bank{
    min_Bal=500;
    constructor(account_no,account_name,amount){
        this.account_no=account_no;
        this.account_name=account_name;
        this.amount=amount;
    }
    open_Account() {
        console.log("Account Opend Successfully");
      }
    deposit(){
        console.log("Deposit successfully");
    }
    withdraw(){
        console.log("Withdraw successfully");
    }


}   let c1=new Bank(101,"kalyan",5000);
    console.log(c1);
    c1.open_Account();
    c1.withdraw();
    c1.deposit();
    let c2=new Bank(102,"vinay",6000);
    console.log(c2);
    c2.open_Account();
    c2.withdraw();
    c2.deposit();
    


// class Bank {
//     min_Bal = 500;
  
//     constructor(acc_No, acc_Name, amount) {
//       this.acc_No = acc_No;
//       this.acc_Name = acc_Name;
//       this.amount = amount;
//     }
//     open_Account() {
//       console.log("Mr" + this.acc_Name + "Account Opend Successfully");
//     }
//     deposit() {}
//     withdraw() {}
//     get_Statement() {}
//   }
//   let c1 = new Bank(101, "Ravi", 5000);
//   console.log(c1);
//   //c1.constructor();
//   c1.open_Account();
//   c1.open_Account();
//   c1.open_Account();
//   let c2 = new Bank(102, "Kiran", 10000);
//   console.log(c2);
//   c2.open_Account();

// function Person (first_name,age,gender,){
//       this.first_name=first_name;
//       this.age=age;
//       this.gender=gender;
// }
//    let c1=new Person("kalyan",25,"Male");
//    console.log(c1);
//    console.log(c1.first_name);
//    console.log(c1.age);
//    console.log(c1.gender);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }



