// // Code your solution in this file.


function lowerCaseDrivers(drivers){
	return drivers.map(function (driver){
		return driver.toLowerCase();
	})
}

function nameToAttributes(drivers){
	return drivers.map(function(driverName){
		const nameArr = driverName.split(" ");
		return Object.assign({}, {firstName: nameArr[0], lastName:nameArr[1]});
	})
}

function attributesToPhrase(drivers){
	return drivers.map(function(driver){
		return `${driver.name} is from ${driver.hometown}`;
	});
}








