/*
INSTRUCTIONS FROM FCC:
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
 */


function isPrime(num) {

    if (num < 2) return false;

    for (let i = 0; i < num; i++) {
        if (num % i === 0) return false
    }

    return true
}

console.log(isPrime(0));

function sumPrimes(maxNum) {

    let primes = [];

    for (let j = 0; j <= maxNum; j++) {
        if (isPrime(j)) primes.push(j)
    }

    console.log(primes);


}

sumPrimes(10);

//https://pl.wikipedia.org/wiki/Sito_Eratostenesa