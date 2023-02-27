// const {fetchMyIP} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// const {fetchCoordsByIP} = require('./iss');

// fetchCoordsByIP('96.54.80.6', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work! Again!", error);
//     return;
//   }
//   console.log("It worked this time! Returned coordinates:", coordinates);
// });

// const {fetchISSFlyOverTimes} = require('./iss');

// const exampleCoords = {latitude: '48.4284207', longitude: '-123.3656444'};

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("Sorry, something's wrong here, try again!", error);
//     return;
//   }
//   console.log("Success condition achieved! Returned fly-over times:", passTimes);
// });