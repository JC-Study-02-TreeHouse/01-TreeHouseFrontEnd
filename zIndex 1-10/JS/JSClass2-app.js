// CLASS = TreeHouse - javascript-basics //

let correct = 0;
let rank;
const main = document.querySelector('main');

const answer1 = prompt('question 1');
if (answer1.toUpperCase() === 'RUBY') {
  correct += 1;
}
const answer2 = prompt('question 2');
if (answer2.toUpperCase() === 'PYTHON') {
  correct += 1;
}
const answer3 = prompt('question 3');
if (answer3.toUpperCase() === 'CSS') {
  correct += 1;
}
const answer4 = prompt('question 4');
if (answer4.toUpperCase() === 'HTML') {
  correct += 1;
}
const answer5 = prompt('question 5');
if (answer5.toUpperCase() === 'JS') {
  correct += 1;
}


if ( correct === 5 ) {
    rank = "Gold"; 
  } else if ( correct >= 3 ) {
    rank = "Silver";  
  } else if ( correct >= 1 ) { // check for 1-2 correct
    rank = "Bronze";  
  } else {
    rank = "None :(";
  }

  main.innerHTML = `
  <h2>You got ${correct} out of 5 questions correct.</h2>
  <p>Crown earned: <b>${rank}</b></p>`;