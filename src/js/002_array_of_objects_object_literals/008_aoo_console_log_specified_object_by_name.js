// array_of_objects_console_log_specified_object_by_name.js

// create an array to store objects
let people = [
    // object to hold Jane's name and score
    {
        name: 'Jane',
        score: 98
    },
    // object to hold Tabitha's name and score
    {
        name: 'Tabitha',
        score: 95
    }
];

// fibn (findIndexByName)
function fibn(whichArray, whichName)
{
    let index = whichArray.findIndex(function(a)
    {
        return a.name === whichName
    });

    return index;
}

// log the specified object of the array to console
console.log(people[fibn(people, 'Tabitha')].name + '\n' + people[fibn(people, 'Tabitha')].score);

//----//

/*
Tabitha
95
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

