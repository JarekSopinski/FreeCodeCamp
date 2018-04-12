/*
INSTRUCTIONS FROM FCC:

Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
should return [27,5,39,1001].

*/

const largestOfFour = arr => {
    const largestNumbers = []; // array declared inside variable, which will be used to keep final result
    for (let i = 0; i < arr.length; i++) { // loop which runs through main array (1st level)
        let largestNumber = arr[i][0]; // variable used to compare numbers in sub-arrays
        for (let j = 0; j < arr[i].length; j++) { // loop which runs through every sub-array
            if (arr[i][j] > largestNumber) { //numbers in sub-arrays are compared against each other
                largestNumber = arr[i][j]; //largest number in each sub-array is assigned to largestNumber variable
            }
        }
        largestNumbers[i] = largestNumber; // largest numbers are added to an array (declared at the beginning)
    }
    return largestNumbers;
};


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// returns: [5, 27, 39, 1001]

/*
EXPLANATION:
We use nested loop to compare numbers in every sub-array, then pass them to a new array which holds biggest numbers.

DIFFICULTY: 3/10
 */



