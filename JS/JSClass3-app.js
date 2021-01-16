const main = document.querySelector('main');
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

main.innerHTML = `
<p>there are ${secondsPerDay} seconds in a day.</p>`;

main.innerHTML = `
<p>I've been alive for more than ${secondsPerDay * 365 * 41} seconds.</p>`;