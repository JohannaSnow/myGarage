console.log( 'garage.js is source');
// garage array
var garage = [];

var addCar= function(){
  console.log( 'in addCar' );
  // //get user input
  // var year = document.getElementById('yearIn').value;
  //
  // var make = document.getElementById('makeIn').value;
  //
  // var model = document.getElementById('modelIn').value;
  //
  // var picURL = document.getElementById('picURLIn').value;
  //
  // var description= document.getElementById('decriptionIn').value;
  //
  // console.log( 'with.value', document.getElementById('yearIn').value);
  // create car object
// USES fewer lines below to get the job done so you don't need the above code
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
    picURL: document.getElementById('picURLIn').value,
    description: document.getElementById('decriptionIn').value
  } //end newCar
  console.log(newCar);

  // push car into garage
  garage.push( newCar);
//display cars
displayCars();

}//end addCar

var displayCars = function(){
  console.log( 'inDisplayCars');
  console.log( garage );
  // empty our div element
  document.getElementById('allCars').innerHTML='';

//for each car in the garage, add a list item with year, make, modelIn

for( var i = 0; i < garage.length; i++){
  //car information (year, make, model)
  var carInfo =  '<h2>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model +
  '</h2><img src="'+ garage[ i ].picURL + '">';
  //put carInfo inside a list item through a textNode
  //
  // var listItem = document.createElement( 'li');
  // //create the textNode
  // var textNode = document.createTextNode( carInfo );
  //append car info to outputdiv
  document.getElementById( 'allCars').innerHTML += carInfo;

  // //apend textNode as a child to li;
  // listItem.appendChild( testNode );
  // //append list item to the ul
  // document.getElementById( 'allCars' ).appendChild( listItem );

  console.log( carInfo );


  }
};
