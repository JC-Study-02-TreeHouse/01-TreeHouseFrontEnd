const myList = document.getElementsByTagName('li');
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}