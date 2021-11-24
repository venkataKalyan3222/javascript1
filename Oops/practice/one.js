// spread operator
/* function add(){
    let a=[1,2]
    let b=[3,4]
    let c=[...a,...b]
    return c;

}
   let ok=add();
   console.log(ok); */

  /* var a=[1,2]
   var b=[3,4]
   function add(a,b){
    return [...a,...b]
   
   }
  let c1=add(a,b);
  console.log(c1); */

      var a=10;
      function add(){
      var b=5;
      function second_func(){
      var c=a+b;
      return c;
    }
      return second_func();  
  }
   var sum=add();
   document.write(sum);