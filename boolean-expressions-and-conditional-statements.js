/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const canCastMagic = true;
let hasFireSpell = false;

let passedMountains = false;
let enterHut = false;

let userInput = "";

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  passedMountains = true;
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

if (passedMountains === true) {
  console.log("You come upon a dark cave's entrance just off of the road. Further down this path is a forest.");
  userInput = readline.question("Do you go to the 'cave' or the 'forest'?");

  if (userInput === "cave") {
    console.log("You enter the cave and get mauled by a bear. Sad.");
  } else if (userInput === "forest") {
    console.log("Strolling through the forest, you happen to pass a wooden hut.");
    userInput = readline.question("Do you 'investigate'?");

    if (userInput === "investigate") {
      enterHut = true;
    }

    if (enterHut = true) {
      console.log("There is an old woman within the hut. She is stirring a big pot of bright red liquid. She speaks.");
      console.log("\"Oh, hello there. You must be here for the brew. Here, have a cup, I didn't add any shoes!\"");
      console.log("Not one to shy away from fruit punch, you gulp the liquid down heartily.");
      if (canCastMagic === true) {
        console.log("You've gained the ability to cast: Fire Spell");
        hasFireSpell = true;
      }
    }
  }
}

if (hasFireSpell) {
  console.log("\nYou make a nice living as a travelling, magical preformer.\n");
}

console.log("Your adventure ends.");

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/