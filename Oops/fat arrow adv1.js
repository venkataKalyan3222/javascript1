//This keyword gives empty object in fatarrow function
// function add(){
//     console.log(this);
// }
// add();

let add=()=>{
    console.log(this);
}
add();