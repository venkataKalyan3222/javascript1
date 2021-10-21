//Write  a program to Print given 3 numbers in assending order // 
var x=236;
var y=3200;
var z=1234;
if(x>y && x>z){
    if (y>z){
    console.log("Ascending order: z,y,x:1234,3200,236")}
else{
    console.log("dissending order: x,y,z:236,322,1234")
}
}
else if(y>x && y>z){
    if(x>z){
        console.log("Ascending order: z,x,y:1234,236,3200")   
    }
    else{
        console.log("dissending order: y,x,z :3200,1234,236")
    }
}
else if(z>x && z>y)
{ 
    if(x>y)
    console.log("Ascending order: y,x,z,3200,236,1234")
}
else{
    console.log("dissending order:z,x,y,1234,236,3200")
}


