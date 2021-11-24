// Function Override Concept:

// function add(){
//     console.log("Hello Good morning");
// }
// add();

// function add(){
//     console.log("Hello Good Night");
// }
// add();


// Convert fat arrow ovverriding is resolve: 
var add=()=>{
    console.log('Hello Good Morning');
};
add();

var add=()=>{
    console.log('Hello Good Night');
};
add();