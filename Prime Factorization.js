//prime Factorization
let number = Math.floor(Math.random() *100);
console.log(number);
let primeArr = new Array();
for (i=2; i<=number; i++) {
    if (number%i==0){
        primeArr.push(i);
    }
}
console.log("Prime Factors are : "+primeArr);