console.log('garage.js sourced!');

var garage = [];

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
  garage.push(newCar);
  // display cars
  displayCars();
}; // end addCar

var displayCars = function () {
  console.log('in displayCars');
  console.log(garage);
};
