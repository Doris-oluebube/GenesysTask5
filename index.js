// 1. Create a function that will be able to convert figures from Fahrenheit to Celcuis

fToCel(80);
celToF(20);
function fToCel(fahrenheit)
{
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var output = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(output)
}

function celToF(celsius)
{
    var celTemp = celsius;
    var celToF = celTemp * 9 / 5 + 32;
    var output = celTemp+'\xB0C is ' + celToF + '\xB0F.';
    console.log(output)
}


// 2. Create a function that will calculate the average of numbers in an array


function average(array) {
    return array.reduce((x,y) => x+y)/array.length
}
console.log(average([1,2,3,4,5]))


// function avg(array){
//         let sum = 0;
//         for (let i = 0; i < array.length; i++){
//             sum += array[i];
//         }
//         return sum / array.length
//     }
//     console.log(avg([1,2,3,4,5]))




// 3. Create a function that checks of a number, n is divisible by two numbers x and y.
// All inputs are positive, non-zero digits


function isDivisible(n,x,y){
    return(n%x ==0 && n%y ==0) ? true : false;
}
console.log(isDivisible(5,1,3))



// 4. Create a function that will output the first 100 prime numbers

// function firstPrime(num){
    let count=0
    let i,j
    for(j=2; j<=100; j++)
    {
        for( i=1; i<=j; i++)
        {
            if(j%i==0)
            count++
        }
        if(count==2)
        console.log(j)
        count=0
    }
// }




// 5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num){
    let isPrime = '';
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            isPrime = false;
        } else {
            isPrime = true;
        }
    }
    return isPrime;

}
console.log(isPrime(11))

// 6. Create a function that receives an array of diverse numbers 
// and returns an array containing only positive numbers



// 7. Write a program that prints the numbers from 1 to 100. But for multiple of 3 prints 'FIZZ'
// instead of the number and for multiples of 5 prints 'BUZZ'. For numbers which are multiples of both
// 3 and 5 prints 'FIZZBUZZ'

for(i= 1; i<= 100; i++){
    if ((i % 3 ==0) && (i % 5 == 0)){
    console.log("FIZZBUZZ")
    }

else if(i % 3 == 0){
    console.log("FIZZ")
}
else if( i % 5 == 0){
    console.log("BUZZ")
}
else{
    console.log(i)
}
}