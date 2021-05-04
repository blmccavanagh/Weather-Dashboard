// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// My API key
// ae822aef9413bb77b74f555fff250166
const myApiKey = "ae822aef9413bb77b74f555fff250166";

const defaultLocation = "Perth, AU";

$(document).ready(searchLocation(defaultLocation));

// 


// let now = Date();

const cityInput = document.querySelector('#location-search');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', searchButtonClick);

function searchButtonClick () {
    const inputValue = cityInput.value;
    console.log(inputValue);
    searchLocation(inputValue);
}

function searchLocation (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);

        const cityName = data.name;
        const countryCode = data.sys.country;

        const latSearch = data.coord.lat;
        const lonSearch = data.coord.lon;

        getWeather(latSearch, lonSearch, cityName, countryCode); 
        
        
    });
}

function getWeather (lat, lon, name, country) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${myApiKey}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        domBuilder(data, name, country);
    });
}

function domBuilder (weather, name, country) {

    let unixDate = new Date(weather.current.dt*1000).toLocaleDateString('en-GB');
    const iconLocation = `https://openweathermap.org/img/wn/${weather.current.weather[0].icon.value}@2x.png`;

    const mainCity = document.querySelector('#main-city');
    mainCity.textContent = `${name}, ${country}`;


    const icon = document.querySelector('#main-icon');
    const mainIcon = document.createElement('img');
    Image.src = iconLocation;
    icon.appendChild(mainIcon);
    // mainIcon.innerHtml = `${weather.current.weather[0].icon}`;

    const currentDate = document.querySelector('#current-date');
    currentDate.textContent = unixDate;


    const weatherConditions = document.querySelector('#weather-cond');
    weatherConditions.textContent = `${weather.current.weather[0].description}`;

    const mainTemp = document.querySelector('#main-temp');
    mainTemp.textContent = `Temp: ${weather.current.temp}°C`;

    const feelsLike = document.querySelector('#feels-like');
    feelsLike.classList.add('italic');
    feelsLike.textContent = `feels like ${weather.current.feels_like}°C`;

    const mainMin = document.querySelector('#main-min');
    mainMin.textContent = `Min Temp: ${weather.daily[1].temp.min}°C`;

    const mainMax = document.querySelector('#main-max');
    mainMax.textContent = `Max Temp: ${weather.daily[1].temp.max}°C`;

    const mainWind = document.querySelector('#main-wind');
    mainWind.textContent = `Wind: ${weather.current.wind_speed} km/h`;

    const mainHumid = document.querySelector('#main-humid');
    mainHumid.textContent = `Humidity: ${weather.current.humidity}%`;

    
    const sunrise = document.querySelector('#sunrise');
    // Date.now(`${weather.current.sunrise}`)
    // const sunriseTime = Date();
    let sunriseTime = new Date(weather.current.sunrise*1000).toLocaleTimeString('en-AU');
    sunrise.textContent = sunriseTime;
    
    const sunset = document.querySelector('#sunset');
    let sunsetTime = new Date(weather.current.sunset*1000).toLocaleTimeString('en-AU');
    sunset.textContent = sunsetTime;
    

    
    const forecastOneDate = document.querySelector('#date-1');
    let unixDateF1 = new Date(weather.daily[2].dt*1000).toLocaleDateString('en-AU');
    forecastOneDate.textContent = unixDateF1;

    const forecastOneTemp = document.querySelector('#temp-1');
    forecastOneTemp.textContent = `Temp: ${weather.daily[2].temp.day}°C`;
    
    const forecastOneWind = document.querySelector('#wind-1');
    forecastOneWind.textContent = `Wind: ${weather.daily[2].wind_speed} km/h`;
    
    const forecastOneHumid = document.querySelector('#humid-1');
    forecastOneHumid.textContent = `Humidity: ${weather.daily[2].humidity}%`;
    
    
    
    const forecastTwoDate = document.querySelector('#date-2');
    let unixDateF2 = new Date(weather.daily[3].dt*1000).toLocaleDateString('en-AU');
    forecastTwoDate.textContent = unixDateF2;

    const forecastTwoTemp = document.querySelector('#temp-2');
    forecastTwoTemp.textContent = `Temp: ${weather.daily[3].temp.day}°C`;
    
    const forecastTwoWind = document.querySelector('#wind-2');
    forecastTwoWind.textContent = `Wind: ${weather.daily[3].wind_speed} km/h`;
    
    const forecastTwoHumid = document.querySelector('#humid-2');
    forecastTwoHumid.textContent = `Humidity: ${weather.daily[3].humidity}%`;
    

    
    const forecastThreeDate = document.querySelector('#date-3');
    let unixDateF3 = new Date(weather.daily[4].dt*1000).toLocaleDateString('en-AU');
    forecastThreeDate.textContent = unixDateF3;

    const forecastThreeTemp = document.querySelector('#temp-3');
    forecastThreeTemp.textContent = `Temp: ${weather.daily[4].temp.day}°C`;

    const forecastThreeWind = document.querySelector('#wind-3');
    forecastThreeWind.textContent = `Wind: ${weather.daily[4].wind_speed} km/h`;

    const forecastThreeHumid = document.querySelector('#humid-3');
    forecastThreeHumid.textContent = `Humidity: ${weather.daily[4].humidity}%`;
    


    const forecastFourDate = document.querySelector('#date-4');
    let unixDateF4 = new Date(weather.daily[5].dt*1000).toLocaleDateString('en-AU');
    forecastFourDate.textContent = unixDateF4;

    const forecastFourTemp = document.querySelector('#temp-4');
    forecastFourTemp.textContent = `Temp: ${weather.daily[5].temp.day}°C`;

    const forecastFourWind = document.querySelector('#wind-4');
    forecastFourWind.textContent = `Wind: ${weather.daily[5].wind_speed} km/h`;

    const forecastFourHumid = document.querySelector('#humid-4');
    forecastFourHumid.textContent = `Humidity: ${weather.daily[5].humidity}%`;
    


    const forecastFiveDate = document.querySelector('#date-5');
    let unixDateF5 = new Date(weather.daily[6].dt*1000).toLocaleDateString('en-AU');
    forecastFiveDate.textContent = unixDateF5;

    const forecastFiveTemp = document.querySelector('#temp-5');
    forecastFiveTemp.textContent = `Temp: ${weather.daily[6].temp.day}°C`;

    const forecastFiveWind = document.querySelector('#wind-5');
    forecastFiveWind.textContent = `Wind: ${weather.daily[6].wind_speed} km/h`;
    
    const forecastFiveHumid = document.querySelector('#humid-5');
    forecastFiveHumid.textContent = `Humidity: ${weather.daily[6].humidity}%`;

    uvColorCode(weather);
} 

function uvColorCode(weather){
    // Use the value from uvi
    const uvi = weather.current.uvi;

    const mainUV = document.querySelector('#main-uv');
    // let uviRating = '';
    mainUV.textContent = `UV Index: ${uvi}`;
    
    
    if (uvi >= 0 && uvi <= 2) {
        // inner text of main uv element
        mainUV.classList.add('bg-green-400');
        // uviRating = '[Low]';
        // mainUV.appendChild(uviRating);
    } else if (uvi > 2 && uvi <= 5) {
        // inner text of main uv element
        mainUV.addClass('.uvMod');
        // mainUV.innerHTML('[Moderate]');
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