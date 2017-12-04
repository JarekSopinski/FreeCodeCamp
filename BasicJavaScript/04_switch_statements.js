/* ------------------------------------------ */

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }


    // Only change code above this line
    return answer;
}

// Change this value to test
sequentialSizes(1);

/* ------------------------------------- */

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 1:
            answer = "There is no #1";
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
chainToSwitch(7);

/* --------------------------------- */

function howToBehave(light) {
    answer = '';
    switch(light) {
        case 'red':
            answer = 'stop';
            break;
        case 'green':
            answer = 'go';
            break;
        case 'yellow':
            answer = 'slow down';
            break;
        default:
            answer = 'unknow value'
    }
    return answer;
}

howToBehave();

/* -------------------------------- */

function howToRide(color) {
    if (color === 'red') {
        return 'stop';
    } else if (color === 'green') {
        return 'go';
    }  else if (color === 'yellow') {
        return 'slow down'
    } else {
        return 'unknow value'
    }
}

howToRide();