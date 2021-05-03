// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// My API key
// ae822aef9413bb77b74f555fff250166


// 

const myApiKey = "ae822aef9413bb77b74f555fff250166";
const testCity = "Perth";

function searchLocation (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let latSearch = data.coord.lat;
        let lonSearch = data.coord.lon;
        console.log(data, latSearch, lonSearch);
        getWeather(latSearch, lonSearch); 
        
        
    });
}

searchLocation(testCity);

function getWeather (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        domBuilder(data);
    });
}

function domBuilder (weather) {

    let mainCity = document.querySelector('#main-city');
    mainCity.textContent = testCity;

    let mainTemp = document.querySelector('#main-temp');
    mainTemp.textContent = `Temp: ${weather.current.temp}°C`;

    let mainWind = document.querySelector('#main-wind');
    mainWind.textContent = `Wind: ${weather.current.wind_speed} km/h`;

    let mainHumid = document.querySelector('#main-humid');
    mainHumid.textContent = `Humidity: ${weather.current.humidity}%`;

    let mainUV = document.querySelector('#main-uv');
    mainUV.textContent = `UV Index: ${weather.current.uvi}`;
} 

// += shorthand to add text instead of override text

// response gets the response from the api and runs that as the parameter of the function

// fetch is a promise, waiting for an event (the http address) to use the infromation within 
// once the promise has received the info then you need to tell it what to do with that info

// two variables for lattitude and longditute (learning.coord.lat) etc
// learning = data (insert Yuri laughing)

// location variable 
// q = city name
// OR
//  = lat/long
// depending on function value of q is redefined


// hit first api (openweather) weather?
// input = city name
// output = lat/long

// second api (onecall)
// input = lat/long
// output = current weather & forecast

