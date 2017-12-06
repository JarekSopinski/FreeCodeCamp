/*------------------------------------------------*/
// Use a for loop to work to push the values 1 through 5 onto myArray.

var myArray = [];

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

/*---------------------------------------------*/

// Push the odd numbers from 1 through 9 to myArray using a for loop.

var myArray02 = [];

for (var i = 1; i < 10; i += 2) {
    myArray02.push(i);
}

/*----------------------------------------------*/

//Push the odd numbers from 9 through 1 to myArray using a for loop.

var myArray03 = [];

for (var i = 9; i > 0; i -= 2){
    myArray03.push(i);
}

/*--------------------------------------------------*/

//Declare and initialize a variable total to 0.
// Use a for loop to add the value of each element of the myArr array to total.

var myArr = [ 2, 3, 4, 5, 6];

var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i]; // total = 20
}

/*-------------------------------------------------*/

/*Modify function multiplyAll so that it multiplies the product variable by
each number in the sub-arrays of arr */

function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

/*--------------------------------------------------*/
//Push the numbers 0 through 4 to myArray using a while loop.

var myArrayW = [];

var w = 0;
while(w < 5) {
    myArrayW.push(w);
    w++;
}