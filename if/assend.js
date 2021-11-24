//Write  a program to Print given 3 numbers in assending order // 
var x=30;
var y=261;
var z=40;
if(x>y && x>z){
    if (y>z){
    console.log("Ascending order: z,y,x")
}
else{
    console.log("dissending order: x,y,z")
}
    }
else if(y>x && y>z){
    if(x>z){
        console.log("Ascending order: x,z,y")   
    }
    else{
        console.log("dissending order: y,z,x")
    }
}
else if(z>x && z>y)
{ 
    if(x>y)
    console.log("Ascending order: y,x,z")
}
else{
    console.log("dissending order:z,x,y")
}


