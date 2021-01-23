// CLASS = TreeHouse - javascript-functions //

function getRandomNumber(Num1 = 10, Num2 = 5) {
    if ( isNaN(Num1) || isNaN(Num2) ) {
        throw Error('Must be a number');
    }
    return Math.floor( Math.random() * (Num1 - Num2 + 1) ) + Num1;
        
}

console.log( getRandomNumber(1, 6) );
console.log( getRandomNumber(10, 60) );
console.log( getRandomNumber(100, 600) );
console.log( getRandomNumber(undefined, 6) );
console.log( getRandomNumber(2, 'three') );