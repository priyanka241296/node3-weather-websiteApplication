const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=26286b4d9dc18041f5f64d8fa25b8fbc&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}  .It  is currently ${body.current.temperature} degress out . It feels like ${body.current.feelslike} % degree out. The humminity is ${body.current.humidity} %. `
      );
    }
  });
};
module.exports = forecast;
