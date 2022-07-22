//Print odds 1-20
for(i = 1; i <= 20; i++){
    if(i % 2 == 1) {
        console.log(i);
    }
}

//Decreasing Multiples 0f 3
for(i = 100; i >= 0; i--){
    if(i % 3 == 0) {
        console.log(i);
    }
}

//Print the sequence
for(i = 4; i >= -4; i-=1.5) {
    console.log(i);
}

//Sigma 
var sum = 0;
for(i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Factorial
var product = 1;
for(i = 2; i <= 12; i++) {
    product *= i;
}
console.log(product);