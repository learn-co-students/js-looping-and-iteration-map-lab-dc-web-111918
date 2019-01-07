// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];

    return {firstName: first, lastName: last};
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    const driverName = driver.name
    const driverHometown = driver.hometown
    return `${driverName} is from ${driverHometown}`
  });
}
