const myList = document.getElementsByTagName('li');
// these are the most flexible as they can accept anything i.e. id, class, tag
const errorNotPurple = document.querySelectorAll('.error-not-purple');
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
