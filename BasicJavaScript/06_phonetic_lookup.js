// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    /*switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }*/

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];

    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");

/*-----------------------------------------------*/
//Mój przykład wykorzystujący ten sam mechanizm:

function checkCapital(country) {
    var result = '';
    var countriesList = {
        'Poland': 'Warsaw',
        'France': 'Paris',
        'Germany': 'Berlin',
        'Spain': 'Madrid',
        'United Kingdom': 'London'
    };
    result = countriesList[country]; //wyszukuje w obiekcie countriesList według argumentu, który został przypisany do parametru country
    return result
}

checkCapital();