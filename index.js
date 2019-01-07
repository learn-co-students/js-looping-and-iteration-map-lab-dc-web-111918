function lowerCaseDrivers(driversArray) {
  return driversArray.map (function(driverName) {
    return driverName.toLowerCase();
  });
}

function nameToAttributes(driversArray) {
  return driversArray.map (function(driverName) {
    driverName = driverName.split(" ");
    const firstName = driverName[0];
    const lastName = driverName[1];
    return {firstName: firstName, lastName: lastName};
  });
}

function attributesToPhrase(driversObj) {
  return driversObj.map (function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
