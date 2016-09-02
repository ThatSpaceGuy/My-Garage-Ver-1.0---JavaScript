console.log('garage.js sourced!');

var garage = [];

var addCar = function (){
  console.log('in addCar');
  // get user input
  // create car object
  var newCar = {
    year: $('#yearIn').val().replace(/[^\d]/g,''), // clean out any non-digits
    make: $('#makeIn').val(),
    model: $('#modelIn').val(),
    picURL: $('#picURLIn').val(),
    description: $('#descriptionIn').val(),
    driving: false
  };

  // check URL
  var validURL=false;
  if (newCar.picURL.slice(0,7)==='http://'){
    validURL = true;
  } else if(newCar.picURL.slice(0,8)==='https://') {
    validURL = true;
  }

  if ( newCar.year === '' || newCar.make === '' || newCar.model === ''){
    $('.requiredField').fadeOut().fadeIn().fadeOut().fadeIn();
    alert('Year, Make, and Model are required fields!');
  } else if (newCar.year<1886 || newCar.year>2050) {
    $('#yearIn').fadeOut().fadeIn().fadeOut().fadeIn();
    alert('Please enter a valid year! (Between 1886 and 2050)');
  } else if (!validURL) {
    console.log(newCar.picURL.slice(0,8));
    $('#picURLIn').fadeOut().fadeIn().fadeOut().fadeIn();
    alert('Sorry, the picture URL must start with either \'http://\' or \'https://\'.');
  } else {
    clearInputs();
    // push car into garage
    garage.push(newCar);
    // display cars
    parkCar();
  }
}; // end addCar

var clearInputs = function(){
  console.log('in clearInputs');
  $('#yearIn').val('');
  $('#makeIn').val('');
  $('#modelIn').val('');
  $('#picURLIn').val('');
  $('#descriptionIn').val('');
};

var parkCar = function(){
  console.log('in parkCar');

  if (garage.length == 1) {
    $('#emptyText').fadeOut();
  }
  updateGarage(true);

  $('#car'+(garage.length-1)).fadeIn();
};

var updateGarage = function (adding) {
  console.log('in updateGarage');
  console.log(garage);

  carList = $('#allCars');
  // empty our ul element
  carList.html('');

  var garageFloor = '';
  // for each car in the garage, add a list item with year, make and model
  for (var i = 0; i < garage.length; i++) {
    var buttonText='Drive';
    var picToShow=garage[i].picURL;
    var descText=garage[i].description;
    var hiddenText='';
    if (garage[i].driving){
      buttonText='Return';
      picToShow='https://s3.amazonaws.com/static.carthrottle.com/workspace/uploads/posts/2015/12/e4430dd8ac7c4c1cdb518c48c49ad56e.jpg';
      descText='This car is currently out for a drive.';
    }

    if (i == garage.length-1 && adding) {
      hiddenText = ' hidden';
    }
      // basic car info - year, make, model
      garageFloor += '<div id="car'+i+'"'+hiddenText+'><h2>'+garage[i].year+' '+
      garage[i].make+' '+garage[i].model+'</h2><img src="'+picToShow+'"><p>'+
      descText+' <button onClick="sellCar('+i+')">Sell this car!</button>'+
      ' <button onClick="driveCar('+i+')">'+buttonText+' this car!</button></p></div>';
  }
  // put car info in output div
  carList.html(garageFloor);
};

var driveCar = function(index){
  console.log('in driveCar with index:',index);

  garage[index].driving = !garage[index].driving;

  updateGarage(false);

};

var sellCar = function(index){
  console.log('in sellCar with index:',index);

  alert('Selling the '+garage[index].year+' '+garage[index].model+
  '... It will no longer appear in the garage.');

  $('#car'+index).animate({width: 'toggle'});
  // splice the car out of the array
  garage.splice(index,1);
  // show cars in garage again

  if (garage.length === 0) {
    $('#emptyText').fadeIn();
  }
};
