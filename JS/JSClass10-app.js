// CLASS = TreeHouse - javascript-Arrays //
/*
const planets = [ 'Mercury', 'Venus', 'Earth', 'Mars' ];

// select item
console.log(planets[0]);

// length
console.log(planets.length);

// add
planets.push('newplanet');

// add to the beginning
planets.unshift('newplanet2');

console.log(planets);

// deletes from the end
planets.pop();

// deletes from the beginning
planets.shift();
*/

// add 2 or more arrays together
// 2 dimension array
/*
const middle = ['lettuce', 'patty']
const burger = ['top bun', middle, 'bottom bun']
console.log(burger);

// spread
const middle = ['lettuce', 'patty']
const burger = ['top bun', ...middle, 'bottom bun']
console.log(burger);
*/

const planets = [ 'Mercury', 'Venus', 'Earth', 'Mars' ];
const rivers = [ 'trent', 'thames' ]
const planetsandrivers = [...planets, ...rivers]

console.log(planetsandrivers);

const numbers = [1,2,3,4]
console.log( Math.max(...numbers) );
console.log( Math.min(...numbers) );