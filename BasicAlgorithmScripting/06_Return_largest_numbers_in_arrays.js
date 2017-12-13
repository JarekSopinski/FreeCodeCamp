/*
/////////////INSTRUCTIONS///////////////

Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

////// Solution for single array //////////////

function largestOfFour(arr) {
    var largestNumber = 0;
    for (var i = 0; i < arr.length; i++) {
            if (arr[i] > largestNumber) {
                largestNumber = arr[i];
            }
        }
    return largestNumber;
}

console.log(largestOfFour([4, 5, 1, 3]));

*/

// Solution for nested arrays:

function largestOfFour(arr) {
    var allNumbers = []; // array declared inside variable, which will be used to declare final result
    for (var i = 0; i < arr.length; i++) { // loop which runs through first level of the array
        var largestNumber = arr[i][0]; // variable used to compare numbers in sub-arrays
        for (var j = 0; j < arr[i].length; j++) { // loop which runs through every sub-array
            if (arr[i][j] > largestNumber) { //numbers in sub-arrays are compared against each other
                largestNumber = arr[i][j]; //largest number in each sub-array is assigned to largestNumber variable
            }
        }
        allNumbers[i] = largestNumber; // largest numbers are added to an array (declared at the beginning)
    }
    return allNumbers; // array is returned
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



