console.log('garage.js sourced!');

var addCar = function (){
  console.log('in addCar');
  // get user input
  // create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modeIn').value,
    picURL: document.getElementById('picURLIn').value,
    description: document.getElementById('descriptionIn').value
  };
  console.log(newCar);
  // push car into garage
  // display cars
}; // end addCar
