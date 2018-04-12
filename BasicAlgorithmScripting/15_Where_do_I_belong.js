/*
https://www.freecodecamp.org/challenges/where-do-i-belong

INSTRUCTIONS FROM FCC:
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
*/

const getIndexToIns = (arr, num) => {

    const sortedArray = arr.sort((prev, next) => {
        return prev - next
    });

    let index = sortedArray.findIndex(number => {return number >= num});

    return index >= 0 ?
        index
        :
        arr.length
};

getIndexToIns([40, 60], 50); // 1
getIndexToIns([10, 20, 30, 40, 50], 30); // 2
getIndexToIns([10, 20, 30, 40, 50], 35); // 3
getIndexToIns([2, 5, 10], 15); // 3

/*
EXPLANATION:

1) We sort an array passed to arr argument and than we pass the result to sortedArray variable;
2) We use .findIndex() method on sortedArray to find first number bigger or equal to num's value;
3) But what if num is bigger than every number in arr (see final example)?
To solve this problem, we run a conditional statement;
4) If .findIndex() didn't find anything, it will always return -1.
So any value which is equal or greater than 0 means that there is number bigger than num, and we can simply return index;
5) Otherwise, the result should be the final index, which is equal to arr.length.

DIFFICULTY: 3.5/10
 */