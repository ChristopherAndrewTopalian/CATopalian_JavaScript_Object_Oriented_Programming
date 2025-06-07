// aoo_object_push_to_array_prompt_inputs_while_loop.js

// create an empty array to store person objects
let people = [];

// define a function to ask the user for entry info
function askEntry()
{
    // prompt the user to enter a name
    let name = prompt('Enter name:');

    // prompt the user to enter a score and convert it to an integer
    let score = parseInt(prompt('Enter score:'), 10);

    // create a new object with name and score properties
    let entry =
    {
        name: name,
        score: score
    };

    // add the object to the people array
    people.push(entry);
}

// define a function to display all entries
function showAllEntries()
{
    // create an empty string to build a message for display
    let message = '';

    // loop through the people array to format all entries
    for (let i = 0; i < people.length; i++)
    {
        // add the person's name to the message
        message += people[i].name + '\n';

        // add the person's score to the message
        message += people[i].score + '\n';

        // add a line separator for clarity
        message += '---\n';
    }

    // show the full message with all entries in an alert box
    alert(message);

    // log the entire people array to the console
    console.log(people);
}

// loop to allow adding multiple entries
while (true)
{
    // call the function to get entry info
    askEntry();

    // ask if the user wants to add another entry
    let again = confirm('Add another person?');

    // break the loop if user doesn't want to continue
    if (!again)
    {
        break;
    }
}

// after all entries are added, show them
showAllEntries();

//----//

// while (true) is a loop that never ends unless you tell it to stop using a break statement inside.

// The true means the condition is always true, so the loop will keep repeating forever unless interrupted.

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

