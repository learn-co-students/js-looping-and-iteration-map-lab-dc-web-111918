// Code your solution in this file.
function lowerCaseDrivers(arr) {
    arr.map(function(drivers){ return drivers.toLowerCase(); });
};

//[john smith, sally jones, beau jepson]
function nameToAttributes(arr) {
  arr.map(function(drivers){
    let splitName = drivers.split(" ");
    return { firstName: splitName[0], lastName: splitName[1] };

  });

};

function attributesToPhrase(arr) {
  arr.map(function(drivers){

    return `${drivers.name} is from ${drivers.hometown}`;
  });



};
