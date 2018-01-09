/*
INSTRUCTIONS:
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

const getIndexToIns = (arr, num) => {
    // I sort an array passed to arr argument and than I pass the result to sortedArray:
    let sortedArray = arr.sort((prev, next) => {
        return prev - next
    });
    // this function checks if a number is bigger or equal to a value passed to a num argument
    const isBiggerThanNum = number => {return number >= num};
    // I use .findIndex() method on sortedArray;
    // the result is index of the first number bigger or equal to num's value:
    let index = sortedArray.findIndex(isBiggerThanNum);
    // But what if num is bigger than every number in arr??? (see final console.log below)
    // To solve this problem, I run a conditional statement:
    if (index >= 0) {
        // If .findIndex() didn't find anything, it will always return -1
        // So any value which is equal or greater than 0 means that there is number bigger than num
        // And so I can simply return index...
        return index
    } else {
        return arr.length //Otherwise, the result should be the final index, which is equal to arr.length
    }
};

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([2, 5, 10], 15)); // 3