// CLASS = TreeHouse - javascript-numbers //

/*
main.innerHTML = `
<p>${rank}</p>`;
*/

const main = document.querySelector('main');

const inputLow = prompt('Provide a low number.');
const inputHigh = prompt('Provide a high number.');
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

if (lowNumber && highNumber) {
    const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1)  ) + lowNumber;
    main.innerHTML = `
    <p>${randomNumber} is a random number between ${lowNumber} and ${highNumber}.</p>`;
}
else {
    main.innerHTML = `
    <p>This is not a number please try again.</p>`;
}


/* -- this is how I debugged
console.log(inputHigh);
console.log(highNumber);
console.log(randomNumber);
*/