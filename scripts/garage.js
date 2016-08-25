console.log('garage.js sourced!');

var garage = [];

var addCar = function (){
  console.log('in addCar');
  // get user input
  // create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
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

  carList = document.getElementById('allCars');
  // empty our ul element
  carList.innerHTML='';

  // for each car in the garage, add a list item with year, make and model
  for (var i = 0; i < garage.length; i++) {
    // basic car info - year, make, model
    var carInfo = '<h2>'+garage[i].year+' '+garage[i].make+' '+garage[i].model+
      '</h2><img src="'+garage[i].picURL+'"><p>'+garage[i].description+'</p>';
    // append car info to output div
    carList.innerHTML += carInfo;

  }

};
