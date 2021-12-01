// generating 10 random number and sorting with sort method
var array=[];
for(var i=0;i<10;i++){
    array[i]=Math.floor(Math.random()*900)+99;
}
console.log(array);
array.sort();
console.log(array[array.length-2]);
console.log(array[1]);
