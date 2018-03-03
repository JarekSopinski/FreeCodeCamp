/*
INSTRUCTIONS FROM FCC:

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as
by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
evenly divisible by all numbers between 1 and 3.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
 */

function smallestCommons(numbers) {

    // NOTE: Uncomment all console logs for a better understanding of how this function work!

    // First we sort numbers (they might not be in a correct order):
    const sortedNumbers = numbers.sort((prev, next) => {return prev - next});

    // We pass the beginning and the end of a range to variables:
    const firstNum = sortedNumbers[0];
    const lastNum = sortedNumbers[1];

    // LCM (Least Common Multiple) is initialized with a value of a last number from range:
    let LCM = lastNum;

    // We loop through the range; the loop is decremented because we need the smallest common multiple:
    for (let i = lastNum; i >= firstNum; i--) {

        //console.log(`Current number: ${i}`);

        // If current LCM's value can't be evenly divided by current number (i), we increment LCM
        // with a value of a last number from range. As long as the number won't divide evenly, the incrementation
        // will go on. After the number passes the test, loop will proceed to the next number. But if the next number
        // fails, the loop will go back to the previous number (with updated LCM's value).
        // The loop comes to an end ONLY when ALL numbers pass the test IN A ROW!

        if (LCM % i !== 0) {
            //console.log("Doesn't divide evenly");
            LCM += lastNum;
            i = lastNum;
            //console.log(`Current LCM: ${LCM}`);
        } else {
            //console.log('Divides evenly');}
        }
    }

    return LCM

}


console.log( smallestCommons([1,5]) ); //60



/*

***************************************************************************

Below are my other incomplete attempts:

***************************************************************************

function smallestCommons(numbers) {

    const sortedNumbers = numbers.sort((prev, next) => {return prev - next});
    console.log(sortedNumbers);

    const start = sortedNumbers[0];
    const end = sortedNumbers[1];
    let range = [];

    for (let i = start; i <= end; i++) {
        range.push(i)
    }

    console.log(range);

    let smallestMultiply = 0;
    let multiplies = [];

    for (let i = end; i > 0; i--) {
        console.log(`NUMBER: ${i}`);

        for (let j = i*2; j < 100; j += i) { // 100 is temporary
            console.log(`MULTIPLIER: ${j}`);
            if (j % range[i] === 0 && j % start === 0 && j % end === 0) {
                multiplies.push(j);
                smallestMultiply = j;
                console.log(`SMALLEST MULTIPLY: ${smallestMultiply}`);
                break
            }

        } // end of 2nd loop

    } // end of first loop

    console.log(multiplies);
    console.log(smallestMultiply);

**************************************************************************

function smallestCommons(numbers) {

    const sortedNumbers = numbers.sort((prev, next) => {return prev - next});
    console.log(sortedNumbers);

    const start = sortedNumbers[0];
    const end = sortedNumbers[1];
    let range = [];

    for (let i = start; i <= end; i++) {
        range.push(i)
    }

    console.log(range);

    let smallestMultiply = 0;
    let multiplies = [];

    for (let i = end; i > 0; i--) {
        console.log(`NUMBER: ${i}`);

        for (let j = i*2; j < 100; j += i) { // 100 is temporary
            console.log(`MULTIPLIER: ${j}`);
                multiplies.push(j);
        } // end of 2nd loop

    } // end of first loop

    console.log(multiplies);
    console.log(smallestMultiply);

    let evenMultiplies = [];

    for (let i = 0; i < range.length; i++) {
        if (multiplies[i] % range[i] === 0) {
            evenMultiplies.push(multiplies[i])
        }
    };

    console.log(evenMultiplies);

}

*/