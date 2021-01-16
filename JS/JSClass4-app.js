/*
main.innerHTML = `
<p>${rank}</p>`;
*/

const main = document.querySelector('main');

const inputHigh = prompt('Provide a number.');
const highNumber = parseInt(inputHigh);
const randomNumber = Math.floor( Math.random() * highNumber ) + 1;

/* -- this is how I debugged
console.log(inputHigh);
console.log(highNumber);
console.log(randomNumber);
*/

main.innerHTML = `
<p>${randomNumber} is a random number between 1 and ${highNumber}.</p>`;
