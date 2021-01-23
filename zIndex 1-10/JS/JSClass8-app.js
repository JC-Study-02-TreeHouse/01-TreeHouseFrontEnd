// CLASS = TreeHouse - javascript-Loops //

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

// let counter = 0;
/*
  let counter = 0;
  while (counter < 10) {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter ++; // increment operator
  }
  let counter = 9;
  while (counter < 10) {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter --; // decrement operator
  }


// use this if you need it to run before checking a while condition
do {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter ++; // increment operator
} while (counter < 10);


for ( let counter = 0; counter < 10; counter ++ ) {
    console.log(`The random number is ${getRandomNumber(10)}`);
}

const main = document.querySelector('main');
let html = '';

for ( let i = 1; i <= 10; i ++ ) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;
*/

// EXIT LOOPS with a 'break out'.
//Notice how the loop starts counting down from 5 and uses the decrement operator (--) to decrease the value of i by one each time through the loop.
const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;
  }
}

alert(message);