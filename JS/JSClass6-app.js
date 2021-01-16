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