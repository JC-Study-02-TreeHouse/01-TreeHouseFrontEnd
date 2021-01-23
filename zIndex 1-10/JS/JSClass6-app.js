// CLASS = TreeHouse - javascript-functions //
// explaining the scope


// Global Scope
const person = 'lee';

function greeting() {
    // function scope
    const person = 'meg';
    alert(`Hi, ${person}`);
}

greeting();
alert(`Hi, ${person}`);
greeting();

// Functions can access the 'global scope' but GS cannot access 'function scope'

// Global Scope
let person = 'lee';

function greeting() {
    // function scope
    person = 'meg';
    alert(`Hi, ${person}`);
}

greeting();
alert(`Hi, ${person}`);
greeting();

// different types of functionals, all are possible and have their own benefits but the preferred is declaration
// Function declaration
function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
}

// Function expression (this is not hoisted)
const getRandomNumber = function() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
}

// Arrow Function (this is not hoisted)
const getRandomNumber = () => {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
}

// Arrow Functions short hand on one line:
const square = x => { x * x };

// Undefined parameter
function getArea(width = 10, length = 20, unit = 'm') {
    const area = width * length;
    return `${area} ${unit}`;
  }
// if you want to miss a parameter in the console type 'undefined'