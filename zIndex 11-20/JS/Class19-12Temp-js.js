/*
function say(something) {
  console.log(something)
}
*/
function exec(func, arg) {
  func(arg);
}

// revising the above function into the below which is a function within a function
// anonymous function
exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');