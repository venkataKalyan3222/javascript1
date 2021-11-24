//-----How to Create 2D Array in JavaScript



var array=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(array);
// console.log(array[1][0]);
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++){
  
        console.log(array[i][j]);
        
    }
}



// //--- sum of 1d array concept
// var ar=[1,2,3,4]
// var res=0
// for(var i=0;i<=3;i++)
// {
//     res=res+ar[i]
// }
// console.log(res);
// console.log(undefined+2);// undefine +2 == NAN

var array=[[1,2,3][4,5,6][7,8,9]];
for(i=0;i<=3;i++){
    for(j=0;j<=3;j++){
        console.log(array[i][j]);
}
}