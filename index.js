// 1. Create a function that will be able to convert figures from Fahrenheit to Celcuis

fToCel(80);
celToF(20);
function fToCel(fahrenheit)
{
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    console.log(fToCel)
}

function celToF(celsius)
{
    var celTemp = celsius;
    var celToF = celTemp * 9 / 5 + 32;
    console.log(celToF)
}


// 2. Create a function that will calculate the average of numbers in an array


function average(array) {
    return array.reduce((x,y) => x+y)/array.length
}
console.log(average([1,2,3,4,5]))





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

function getPositiveNumbers(numbers){
    return numbers.filter(number => number > 0);
}
inputArray = [3, -2, 0, 8, -5, -1, 10];
positiveNumbers = getPositiveNumbers(inputArray);
console.log(positiveNumbers)



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



// 8. The marketing team is spending way too much time typing in hashtags. Let's create a hashtag generator
// for them, our hashtag generator will meet the folllowing criteria;
// *It must start with a hash symbol, #.
// *Ignore all spaces in the input
// *All words must have their letter capitalized.
// *If the finial result is going to be 140 characters, it should return false
// *If the input or result is an empty string, it should return false

function generateHashtag(input) {
    if (!input || input.trim()=== ""){
        return false;
    }

    words = input.trim().split(" ");
    capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    hashtag = "#" + capitalizedWords.join("");

    if (hashtag.length > 140){
        return false;
    }

    return hashtag;
}
inputString = "hello doris";
hashtag = generateHashtag(inputString);
console.log(hashtag);