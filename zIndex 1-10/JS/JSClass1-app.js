// CLASS = TreeHouse - javascript-basics //
// ****Class Example****
//-----------------------------------------------------------//
/*
const stringToShout = prompt("what do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `The message to shout is: ${shout}!!`;

document.querySelector('main').innerHTML = shoutMessage;
*/
//-----------------------------------------------------------//

const word1 = prompt("Please provide word one?");
const word2 = prompt("Please provide word two?");
const word3 = prompt("Please provide word three?");

const finalmessage = `Let's see how this looks ${word1} ${word2} ${word3}!!`;

//console.log(finalmessage)

document.querySelector('main').innerHTML = '<p>' + finalmessage + '</p>';