var animal = 'dog';

function myAnimal() {
  return animal;
  }
 
 
<<<<<<< HEAD
function yourAnimal() {
  var animal = 'cat'
=======
function UNyourAnimal() {
  const animal = 'cat'
>>>>>>> b412a9995b48ebb486a1e45a35c5c312a0692812
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function outsideFunction() {
  return function insideFunction() {
    return "FUNKY!"
  }
}



// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()