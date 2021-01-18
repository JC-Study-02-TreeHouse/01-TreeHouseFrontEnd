// CLASS = TreeHouse - javascript-Arrays //
/* session 1
const playlist = [
  ['So What', 'miles davis', '9:04'],
  ['Respect', 'aa aa', '5:04'],
  ['What a Wonderful World', 'bb aa', '3:04'],
  ['At Last', 'cc aa', '6:04'],
  ['Three Little Birds', 'dd aa', '1:04'],
  ['The Way You Look Tonight', 'ee aa', '10:04']
];

//const myArtist = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[2][1]}`
//console.log(myArtist);

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - time ${ arr[i][2] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
*/

// session 2
// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['Q1', '1'],
  ['Q2', '2'],
  ['Q3', '3'],
  ['Q4', '4'],
  ['Q5', '5'],
];

// 2. Store the number of questions answered correctly
const correct = []
const incorrect = []
let correctAnswers = 0

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);

  if ( response === answer ) {
    correctAnswers ++;
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

let html = `
<h1>you got correct answers ${correctAnswers} </h1>
<h2>you got these right:</h2>
<ol>${createListItems(correct)}</ol>

<h2>you got these wrong:</h2>
<ol>${createListItems(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;

// 4. Display the number of correct answers to the user
