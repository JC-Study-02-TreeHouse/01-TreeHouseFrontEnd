// CLASS = TreeHouse - javascript-Objects //
/* Session 1
const person = { //object
  name: 'Justin', //property and value
  city: 'Derby', //property and value
  age: 37,
  isStudent: true,
  skills: ['JS', 'HTML', 'CSS']
};

const message = `Hi, I am ${person.name}.`

console.log(message);

// update an object property value

const message1 = `Hi, I am ${person.name = 'John'}.`
console.log(message1);

// add a property
person.nickname = 'Jay';

const message2 = `Hi, I am ${person.name} and ${person.nickname} and skills: ${person.skills.join(', ')}.`
console.log(message2);
*/

/* session 2
//for in  statements
const person = { //object
  name: 'Justin', //property and value
  city: 'Derby', //property and value
  age: 37,
  isStudent: true,
  skills: ['JS', 'HTML', 'CSS']
};

for (let prop in person) {
  console.log(`${prop}`);
  //console.log(`${person.prop}`); // this does not work need the [] because 'prop' is you have given it to access all the contents within the 'object'
  console.log(`${prop}: ${person[prop]}`);
}
*/

/* session 3 */
// Store Objects in Arrays
// 1. Create an array to hold quiz questions and answers
const questions = [
  {question: 'How many planets are in the Solar System?', answer: '8'},
  {question: 'How many continents are there?', answer: '7'},
  {question: 'How many legs does an insect have?', answer: '6'},
  {question: 'What year was JavaScript created?', answer: '1995'}
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i].question;
  let answer = questions[i].answer;
  let response = prompt(question);
  
  if ( response === answer ) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;