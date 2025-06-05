// aoo_console_log_each_object.js

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

// make an empty string variable
let theString = '';

// loop through the people array of objects
for (let x = 0; x < people.length; x++)
{
    // build theString with object data
    theString += people[x].name;
    theString += '\n';
    theString += people[x].score;
    theString += '\n';
    theString += '----';
    theString += '\n';
}

// log theString to console
console.log(theString);

//----//

/*
Jane
98
----
Tabitha
95
----
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

