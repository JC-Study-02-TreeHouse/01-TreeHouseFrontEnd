// CLASS = TreeHouse - javascript-Objects //
const pets = [
  { name: 'Joey',type: 'Dog',breed: 'Australian Shepherd',age: 8,photo: 'images/aussie.jpg' },
  { name: 'Patches',type: 'Cat',breed: 'Domestic Shorthair',age: 1,photo: 'images/tabby.jpg' },
  { name: 'Pugsley',type: 'Dog',breed: 'Pug',age: 6,photo: 'images/pug.jpg' },
  { name: 'Simba',type: 'Cat',breed: 'Persian',age: 5,photo: 'images/persian.jpg' },
  { name: 'Comet',type: 'Dog',breed: 'Golden Retriever',age: 3,photo: 'images/golden.jpg' }
];

let html = '';

for ( let i = 0; i < pets.length; i++ ) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.bread}">
  `;
};

document.querySelector('main').insertAdjacentHTML('beforeend', html);