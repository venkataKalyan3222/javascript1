class Bank_customer{
    Min_Bal=500;
    open_Account(){
        ("Account is opend succesfully");
    }
    deposit(){
        (" Cash Deposit is Succesfully");
    }
    Get_Statement(){
        ("Got the statement Succesfully");
    }
    Withdraw(){
        ("Withdraww Successfully");
    }
    Close_Account() {
        ("Account closed Successfully");
    }
}
     let c1=new Bank_customer();
     console.log(c1.Min_Bal);
     c1.open_Account();
     let c2=new Bank_customer();
     console.log(c2.Min_Bal);
     c2.deposit();
     let c3=new Bank_customer();
     console.log(c3.Min_Bal);
     c3.Get_Statement();
     let c4=new Bank_customer();
     console.log(c4.Min_Bal);
     c4.Withdraw();
     let c5=new Bank_customer();
     console.log(c5.Min_Bal);
     c5.Close_Account();

