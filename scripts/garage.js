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
    description: document.getElementById('descriptionIn').value,
    driving: false
  };

  if ( newCar.year === '' || newCar.make === '' || newCar.model === ''){
    alert('Year, Make, and Model are required fields!');
  } else {
    clearInputs();
    // push car into garage
    garage.push(newCar);
    // display cars
    displayCars();
  }
}; // end addCar

var clearInputs = function(){
  console.log('in clearInputs');
  document.getElementById('yearIn').value = '';
  document.getElementById('makeIn').value = '';
  document.getElementById('modelIn').value = '';
  document.getElementById('picURLIn').value = '';
  document.getElementById('descriptionIn').value = '';
};

var displayCars = function () {
  console.log('in displayCars');
  console.log(garage);

  carList = document.getElementById('allCars');
  // empty our ul element
  carList.innerHTML='';

  if (garage.length === 0){
    carList.innerHTML='<h2>Garage is Empty!</h2>';
  }
  // for each car in the garage, add a list item with year, make and model
  for (var i = 0; i < garage.length; i++) {
    var buttonText='Drive';
    var picToShow=garage[i].picURL;
    var descText=garage[i].description;
    if (garage[i].driving){
      buttonText='Return';
      picToShow='https://thumbs.dreamstime.com/x/empty-garage-21054151.jpg';
      descText='This car is currently out for a drive.';
    }
    // basic car info - year, make, model
    var carInfo = '<h2>'+garage[i].year+' '+garage[i].make+' '+garage[i].model+
    '</h2><img src="'+picToShow+'"><p>'+descText+
    ' <button onClick="sellCar('+i+')">Sell this car!</button>'+
    ' <button onClick="driveCar('+i+')">'+buttonText+' this car!</button></p>';
    // append car info to output div
    carList.innerHTML += carInfo;

  }

};

var driveCar = function(index){
  console.log('in driveCar with index:',index);

  garage[index].driving = !garage[index].driving;

  displayCars();
};

var sellCar = function(index){
  console.log('in sellCar with index:',index);

  alert('Selling the '+garage[index].year+' '+garage[index].model+
  '... It will no longer appear in the garage.');
  // splice the car out of the array
  garage.splice(index,1);
  // show cars in garage again
  displayCars();
};
