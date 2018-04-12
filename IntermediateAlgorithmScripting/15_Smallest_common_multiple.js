/*
https://www.freecodecamp.org/challenges/smallest-common-multiple

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

const smallestCommons = numbers => {

    const sortedNumbers = numbers.sort((prev, next) => {return prev - next});

    const firstNum = sortedNumbers[0];
    const lastNum = sortedNumbers[1];
    let LCM = lastNum;

    for (let i = lastNum; i >= firstNum; i--) {

        //console.log(`Current number: ${i}`);

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

};

smallestCommons([1,5]); //60

/*
EXPLANATION:

1) We sort numbers (they might not be in a correct order). The result is passed to sortedNumbers variable;

2) We pass the beginning and the end of a range to variables (firstNum, lastNum);

3) LCM (Least Common Multiple) is initialized with a value of a last number from range;

4) We loop through the range; the loop is decremented because we need the smallest common multiple;

5) If current LCM's value can't be evenly divided by current number (i), we increment LCM
with a value of a last number from range. As long as the number won't divide evenly, the incrementation
will go on. After the number passes the test, loop will proceed to the next number. But if the next number
fails, the loop will go back to the previous number (with updated LCM's value).
The loop comes to an end ONLY when ALL numbers pass the test IN A ROW!

NOTE: Uncomment all console logs for a better understanding of how this function work.

DIFFICULTY: 7/10
 */

