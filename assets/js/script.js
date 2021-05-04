// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// My API key
// ae822aef9413bb77b74f555fff250166


// 

const myApiKey = "ae822aef9413bb77b74f555fff250166";
const testCity = "Perth, AU";
// let cityName = "";

function searchLocation (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);

        const cityName = data.name;
        // const country = data.sys.country;

        const latSearch = data.coord.lat;
        const lonSearch = data.coord.lon;

        getWeather(latSearch, lonSearch, cityName); 
        
        
    });
}

searchLocation(testCity);

function getWeather (lat, lon, name) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        domBuilder(data, name);
    });
}

function domBuilder (weather, name) {

    const mainCity = document.querySelector('#main-city');
    mainCity.textContent = name;

    // const mainIcon = document.querySelector('#main-icon');
    // mainIcon.innerHtml = `${weather.current.weather[0].icon}`;

    const weatherConditions = document.querySelector('#weather-cond');
    weatherConditions.textContent = `${weather.current.weather[0].description}`

    const mainTemp = document.querySelector('#main-temp');
    mainTemp.textContent = `Temp: ${weather.current.temp}°C`;

    const feelsLike = document.querySelector('#feels-like');
    feelsLike.textContent = `feels like ${weather.current.feels_like}°C`;
    // const feelsLike = `feels like ${weather.current.feels_like}°C`;
    // mainTemp.appendChild(feelsLike);

    const mainMin = document.querySelector('#main-min');
    mainMin.textContent = `Min Temp: ${weather.daily[0].temp.min}°C`;
    // Object.daily[0].temp.max

    const mainMax = document.querySelector('#main-max');
    mainMax.textContent = `Max Temp: ${weather.daily[0].temp.max}°C`;

    const mainWind = document.querySelector('#main-wind');
    mainWind.textContent = `Wind: ${weather.current.wind_speed} km/h`;

    const mainHumid = document.querySelector('#main-humid');
    mainHumid.textContent = `Humidity: ${weather.current.humidity}%`;

    const mainUV = document.querySelector('#main-uv');
    mainUV.textContent = `UV Index: ${weather.current.uvi}`;

    const sunrise = document.querySelector('#sunrise');
    sunrise.textContent = `${weather.current.sunrise}`

    const sunset = document.querySelector('#sunset');
    sunset.textContent = `${weather.current.sunrise}`




    const forecastOneTemp = document.querySelector('#temp-1');
    forecastOneTemp.textContent = `Temp: ${weather.daily[1].temp.day}°C`;

    const forecastOneWind = document.querySelector('#wind-1');
    forecastOneWind.textContent = `Wind: ${weather.daily[1].wind_speed} km/h`;




    const forecastTwoTemp = document.querySelector('#temp-2');
    forecastTwoTemp.textContent = `Temp: ${weather.daily[2].temp.day}°C`;

    const forecastTwoWind = document.querySelector('#wind-2');
    forecastTwoWind.textContent = `Wind: ${weather.daily[2].wind_speed} km/h`;




    const forecastThreeTemp = document.querySelector('#temp-3');
    forecastThreeTemp.textContent = `Temp: ${weather.daily[3].temp.day}°C`;

    const forecastThreeWind = document.querySelector('#wind-3');
    forecastThreeWind.textContent = `Wind: ${weather.daily[3].wind_speed} km/h`;




    const forecastFourTemp = document.querySelector('#temp-4');
    forecastFourTemp.textContent = `Temp: ${weather.daily[4].temp.day}°C`;

    const forecastFourWind = document.querySelector('#wind-4');
    forecastFourWind.textContent = `Wind: ${weather.daily[4].wind_speed} km/h`;




    const forecastFiveTemp = document.querySelector('#temp-5');
    forecastFiveTemp.textContent = `Temp: ${weather.daily[5].temp.day}°C`;

    const forecastFiveWind = document.querySelector('#wind-5');
    forecastFiveWind.textContent = `Wind: ${weather.daily[5].wind_speed} km/h`;
} 

function uvColorCode(){
    // Use the value from uvi

    // let uvi;
    let uvi = parseInt(mainUV);

    if (uvi >= 0 && uvi <= 2) {
        // inner text of main uv element
        mainUV.addClass('uvLow');
    } else if (uvi > 2 && uvi <= 5) {
        // inner text of main uv element
        mainUV.addClass('uvMod');
    } else if (uvi > 5 && uvi <= 7) {
        // inner text of main uv element
        mainUV.addClass('uvHigh');
    } else if (uvi > 7 && uvi <= 10) {
        // inner text of main uv element
        mainUV.addClass('uvVeryHigh');
    } else if (uvi > 5 && uvi <= 7) {
        // inner text of main uv element
        mainUV.addClass('uvExtreme');
    }
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