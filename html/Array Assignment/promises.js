// let doTask = new Promise((resolve, reject) => {
//     //do some task
//     let flag = false;
//     if (flag) {
//       resolve("Success");
//     } else {
//       reject("Failure");
//     }
//   });
//   doTask
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((err) => {
//       console.log(err);

//     });

let add=new Promise((resolve,reject)=>{
  let flag=true;
  if(flag){
    resolve("success");
  }else
    reject("reject")

})
add.then((message)=>{
  console.log(messaage)
})
add.catch((err)=>{
console.log(err)
});

