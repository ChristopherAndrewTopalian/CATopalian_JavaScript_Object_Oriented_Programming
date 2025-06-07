// aoo_push_object_to_array_console_log_each_property.js

// create an empty array to store people objects
let people = [];

// define a person object for jane with a name and score
let jane = 
{
    name: 'Jane',
    score: 98
};

// insert the entry object into the people array
people.push(jane);

// loop through each person in the people array
for (let i = 0; i < people.length; i++)
{
    // log the person's name and score
    console.log(people[i].name + ': ' + people[i].score);
}

//----//

/*
Jane: 98
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

