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

function sumPrimes(maxNum) {

    // This solution is based on an ancient algorithm for finding prime numbers, called 'Sieve of Eratosthenes'.
    // (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

    // First we declare arrays which will store the sieve and our primes:
    let primes = [];
    let sieve = [];

    for (let i = 2; i <= maxNum; i++) {
        // loop is initialized at 2, because 2 is the smallest prime; we count up to the maxNum (argument)
        //console.log(`i:${i}`);

        if (!sieve[i]) {
            // if number isn't set to true inside a sieve, this number is a prime - so we add it to a primes array
            primes.push(i);

            for (let j = i*2; j <= maxNum; j += i) {
                // second loop goes through multiplications of i, up to the maxNum (argument)
                // for example, if i === 2 && maxNum === 10, than j will be: 4,6,8,10
                //console.log(`j: ${j}`);
                //console.log(sieve);
                // Every j is set to true inside a sieve:
                sieve[j] = true
            }

        } // end of condition block

    } // end of 1st loop

    // The final result should be a sum of all primes, so we add them to each other:
    return primes.reduce((prev, next) => {return prev + next},0)
}

console.log( sumPrimes(10) ); // 17
console.log( sumPrimes(977) ); // 73156
