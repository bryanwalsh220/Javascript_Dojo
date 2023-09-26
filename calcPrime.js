
// Finding Prime Numbers: Original

// Number.prototype.isPrime = function() {
//         for( let i=2; i<this; i++ ) {
//             if( this % i === 0 ) {
//                 return false;
//             }
//         }
//         return true;
//     }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`)

// Revision - I made this into a => function for practice sake....

// the goal was to set edge cases first. 

// I revised the forloop to start at the first positive integer that is a prime number and incremeneted it by 6 after each iteration. The reason being 
// upon research, I found some interesting concepts, specifically, wheel optimization - and used the 6k+-1 method to streamline the loop. If we were to keep the original, the loop would run
// too slow. By doing this, I am skipping integers that are not prime numbers.

// additionally, rewrote the if statement to include the num modul of not only i but i+2.

// the last change was the while loop. I changed the 1e4 to 10000 as we are looking for the 10000th primenumber and want to stop the loop there. 

// new loop runs in 10.54.....milliseconds and returns 104729 as the 10000th prime number.

const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i+2) === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; 
while( primeCount < 10000 ) {
    if( isPrime(num)) {
        primeCount++;
    }
    num++;
}

console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`)


// recursive

function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
console.log(rFib(20))

// iterative will be faster because the recursive function will stack and be repetitive. This would be even more noticable if we change the variable to a higher number. i.e

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
console.log(iFib(20))


// rewriting the reverse array


const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >=0; i--) {
        reversed += str[i];
    }
    return reversed;
};

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = reverseString(story)

console.log(reverseString(story))

// created an empty string to put the new reversal into, iterated through the string in reverse adding each character to the new string. then returned the newly created string. Also did arrow function for practice. 


