//---simple Program to Sum of 2D Array in JavaScript

var array=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(array);

// to acces one element in 2D array
// console.log(array[1][0]);


// var sum=0;
// for(var i=0;i<3;i++)
// {
//     for(var j=0;j<3;j++){
//         sum=sum+array[i][j];
//     }
// }
// console.log(sum);                           //outpput: 45

var sum=0;
for(var i=0;i<=array.length-1;i=i+1){
    for(var j=0;j<=array.length-1;j=j+1){
        sum=sum+array[i][j];
    }
    console.log(sum)
}                                              //output: 6 21 45