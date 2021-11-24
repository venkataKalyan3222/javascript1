class Person{
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
}
class Student extends Person{
    constructor(name,age,gpa){
        super(name,age);
        this.gpa=gpa;
}
}
class Teacher extends Person{
    constructor(name,age,classsize){
        super(name,age);
        this.classsize=classsize;
}
}
 let c1=new Student("Kalyan",21,3.7);
 let c2=new Teacher("Sandhya",45,330);
console.log(c1);
console.log(c2);
// console.log(c1.name);
// console.log(c1.age);
// console.log(c1.gpa);
// console.log(c2.name);
// console.log(c2.age);
// console.log(c2.gpa);




// #javascript #super #keyword

// // ********* index.js *********
 
// // super = Reference to the parent class (super class)
// //         Very similar to "this" keyword
// //         Can use a super classes: constructor, methods
 
// class Person{
 
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   welcome(){
//     console.log("Hello",this.name);
//     console.log("You are",this.age,"years old");
//   }
// }
 
// class Student extends Person{
  
//   constructor(name, age, gpa){
//     super(name, age);
//     this.gpa = gpa;
//   }
//   hello(){
//     super.welcome();
//     console.log("Your gpa is",this.gpa);
//   }
// }

// class Teacher extends Person{
 
//   constructor(name, age, classSize){
//     super(name, age);
//     this.classSize = classSize;
//   }
//   hello(){
//     super.welcome();
//     console.log("Your class size is",this.classSize);
//   }
// }

// let student = new Student("Steve", 21, 2.0);
// let teacher = new Teacher("Bob", 45, 30);

// //console.log(student.name);
// //console.log(student.age);
// //console.log(student.gpa);

// //console.log(teacher.name);
// //console.log(teacher.age);
// //console.log(teacher.classSize);

// student.hello();
// teacher.hello();
