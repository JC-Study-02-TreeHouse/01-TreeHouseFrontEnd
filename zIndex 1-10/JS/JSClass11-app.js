// CLASS = TreeHouse - javascript-Arrays //
/* // session 1
const playlist = [
    'So What',
    'Respect',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight'
  ];


  function createlistItems(arr) {
    let items = '';
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

document.querySelector('main').innerHTML =
`<ol>${createlistItems(playlist)}</ol>`;
*/
/* // session 2
console.log(playlist.join(' ')); // puts all the content together with the delimiter of your choice
console.log(playlist.includes('Respect')); // checks is exists in the array
console.log(playlist.includes('respect'));
console.log(playlist.indexOf('Respect')); // see where it is positioned in the array, if not there you get -1
console.log(playlist.indexOf('respect'));
*/

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search ) {
  message = `<b>In Stock:</b> ${inStock.join(', ')}`;  
}
else if (inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <b>${search}</b>.  Its ${inStock.indexOf(search.toLowerCase()) + 1} on the list.`;
} else {
  message = `Sorry, <b>${search}</b> not in stock.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;