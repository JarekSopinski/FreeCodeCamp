/* Create a function called randomRange that takes a range myMin and myMax and returns
a random number that's greater than or equal to myMin, and is less than
or equal to myMax, inclusive.

Formula:
Math.floor(Math.random() * (max - min + 1)) + min

 */

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
randomRange(5, 15);