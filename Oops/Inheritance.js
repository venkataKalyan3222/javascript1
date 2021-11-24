// class tax{
//     tax=5;

// }
// class ka_tax extends tax{

// }
// let c=new ka_tax();
// console.log(c.tax);
// class Goa_tax extends tax{
//     tax=15;
//     sal=25000;
// }
// let c1=new Goa_tax();
// console.log(c1.tax);
// console.log(c1.sal);



class Car{
    Setname(Innova){
        this.name=Innova;
    }
    startengine(){
      console.log("engine is started for"+this.name);
    }
    endengine(){
        console.log("engine is ending for"+this.name);
      }
    
}
class TOYOTA extends Car{
    topspeed(speed){
      console.log("top speed for"+this.name+"is"+speed);
    }
    
}
let c=new TOYOTA("Innova","Start","Stop",200);
// console.log(c);
c.Setname();
// c.startengine();
// c.endengine();
c.topspeed();


