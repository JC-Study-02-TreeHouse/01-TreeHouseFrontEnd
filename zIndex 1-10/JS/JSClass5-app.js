// CLASS = TreeHouse - javascript-functions //
const main = document.querySelector('main');
/*
function alertRandom() {
const randomNumber = Math.floor( Math.random() * 6 ) + 1;
alert(randomNumber);
}

alertRandom();
*/

function getRandomNo() {
const randomNumber = Math.floor( Math.random() * 6 ) + 1;
return randomNumber;
}

const dieRoll = getRandomNo();

function isFieldEmpty () {
    const field = document.querySelector('#info');
    if (!field.value) { // the ! checks it is NOT true
        return true;
    }
    else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if (fieldTest) {
    alert('please provide info')
}