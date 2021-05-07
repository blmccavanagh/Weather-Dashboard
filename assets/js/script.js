let now = moment();
const myApiKey = "ae822aef9413bb77b74f555fff250166";
const defaultLocation = "Perth, AU";
const cityInput = document.querySelector('#location-search');
let searchHistory = JSON.parse(localStorage.getItem('prevSearch'))||[];
const searchButton = document.querySelector('#search-button');
let ul = document.querySelector('#search-history')
// let li = document.createElement('li');
// let button = document.createElement('button');


$(document).ready(function(){
    searchLocation(defaultLocation);
    getSearchHistory();
    // setInterval(updateTimeSensitiveFunctions, 1000);
});

cityInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        userSearch();
        cityInput.value = "";
        getSearchHistory();
    }
});

searchButton.addEventListener('click', function () {
    userSearch();
    cityInput.value = "";
    getSearchHistory();
});

function getSearchHistory () {
    ul.innerHTML = "";
    for (i = 0; i < searchHistory.length; i++) {
        let li = document.createElement('li');
        let button = document.createElement('button');
        console.log(searchHistory[i]);
        button.setAttribute('class', 'prevSearchButton uppercase bg-blue-100 border-2 border-blue-800 m-2 p-2 rounded-lg w-4/5 hover:bg-blue-300');
        button.textContent = searchHistory[i];
        button.value = searchHistory[i];
        li.append(button);
        ul.append(li);
    }
    $('.prevSearchButton').on('click', function () {
        searchLocation(this.value);
    });
} 


$('#clear-button').on('click', function () {
    window.localStorage.clear();
    ul.innerHTML = "";
    searchHistory = [];
});


function userSearch () {
    const inputValue = cityInput.value;
    console.log(inputValue);
    searchLocation(inputValue);
    if (searchHistory.length === 10) {
        searchHistory[0] = inputValue;
    }
    searchHistory.unshift(inputValue);
    localStorage.setItem('prevSearch', JSON.stringify(searchHistory));
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
    
    const mainCity = document.querySelector('#main-city');
    mainCity.textContent = `${name}, ${country}`;
    
    const mainIcon = document.querySelector('#main-icon');
    const mainIconLocation = `https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`;
    mainIcon.setAttribute('src', mainIconLocation);

    const currentDay = document.querySelector('#current-day');
    currentDay.textContent = now.format('dddd');

    const currentDate = document.querySelector('#current-date');
    currentDate.textContent = now.format('MMMM Do YYYY');

    const weatherConditions = document.querySelector('#weather-cond');
    weatherConditions.textContent = `${weather.current.weather[0].description}`;

    const mainTemp = document.querySelector('#main-temp');
    mainTemp.textContent = `Temp: ${weather.current.temp}°C`;

    const feelsLike = document.querySelector('#feels-like');
    feelsLike.classList.add('italic');
    feelsLike.textContent = `feels like ${weather.current.feels_like}°C`;

    const mainMin = document.querySelector('#main-min');
    mainMin.textContent = `Min Temp: ${weather.daily[0].temp.min}°C`;

    const mainMax = document.querySelector('#main-max');
    mainMax.textContent = `Max Temp: ${weather.daily[0].temp.max}°C`;

    const mainWind = document.querySelector('#main-wind');
    mainWind.textContent = `Wind: ${weather.current.wind_speed} km/h`;

    const mainHumid = document.querySelector('#main-humid');
    mainHumid.textContent = `Humidity: ${weather.current.humidity}%`;

    
    const sunrise = document.querySelector('#sunrise');
    let sunriseTime = new Date(weather.current.sunrise*1000).toLocaleTimeString('en-AU');
    sunrise.textContent = sunriseTime;
    
    const sunset = document.querySelector('#sunset');
    let sunsetTime = new Date(weather.current.sunset*1000).toLocaleTimeString('en-AU');
    sunset.textContent = sunsetTime;
    

    const forecastOneDay = document.querySelector('#day-1');
    forecastOneDay.textContent = moment().add(1, 'days').format("dddd");

    const forecastOneDate = document.querySelector('#date-1');
    let unixDateF1 = new Date(weather.daily[1].dt*1000).toLocaleDateString('en-AU');
    forecastOneDate.textContent = unixDateF1;
    
    let iconLocation1 = `https://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`;
    const forecastOneIcon = document.querySelector('#icon-1');
    forecastOneIcon.setAttribute('src', iconLocation1);

    const forecastOneTemp = document.querySelector('#temp-1');
    forecastOneTemp.textContent = `Temp: ${weather.daily[1].temp.day}°C`;
    
    const forecastOneWind = document.querySelector('#wind-1');
    forecastOneWind.textContent = `Wind: ${weather.daily[1].wind_speed} km/h`;
    
    const forecastOneHumid = document.querySelector('#humid-1');
    forecastOneHumid.textContent = `Humidity: ${weather.daily[1].humidity}%`;
    
    
    const forecastTwoDay = document.querySelector('#day-2');
    forecastTwoDay.textContent = moment().add(2, 'days').format("dddd");

    const iconLocation2 = `https://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`;
    const forecastTwoIcon = document.querySelector('#icon-2');
    forecastTwoIcon.setAttribute('src', iconLocation2);

    const forecastTwoDate = document.querySelector('#date-2');
    let unixDateF2 = new Date(weather.daily[2].dt*1000).toLocaleDateString('en-AU');
    forecastTwoDate.textContent = unixDateF2;

    const forecastTwoTemp = document.querySelector('#temp-2');
    forecastTwoTemp.textContent = `Temp: ${weather.daily[2].temp.day}°C`;
    
    const forecastTwoWind = document.querySelector('#wind-2');
    forecastTwoWind.textContent = `Wind: ${weather.daily[2].wind_speed} km/h`;
    
    const forecastTwoHumid = document.querySelector('#humid-2');
    forecastTwoHumid.textContent = `Humidity: ${weather.daily[2].humidity}%`;
    

    const iconLocation3 = `https://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png`;
    const forecastThreeIcon = document.querySelector('#icon-3');
    forecastThreeIcon.setAttribute('src', iconLocation3);

    const forecastThreeDay = document.querySelector('#day-3');
    forecastThreeDay.textContent = moment().add(3, 'days').format("dddd");

    const forecastThreeDate = document.querySelector('#date-3');
    let unixDateF3 = new Date(weather.daily[3].dt*1000).toLocaleDateString('en-AU');
    forecastThreeDate.textContent = unixDateF3;

    const forecastThreeTemp = document.querySelector('#temp-3');
    forecastThreeTemp.textContent = `Temp: ${weather.daily[3].temp.day}°C`;

    const forecastThreeWind = document.querySelector('#wind-3');
    forecastThreeWind.textContent = `Wind: ${weather.daily[3].wind_speed} km/h`;

    const forecastThreeHumid = document.querySelector('#humid-3');
    forecastThreeHumid.textContent = `Humidity: ${weather.daily[3].humidity}%`;
    

    const iconLocation4 = `https://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}@2x.png`;
    const forecastFourIcon = document.querySelector('#icon-4');
    forecastFourIcon.setAttribute('src', iconLocation4);

    const forecastFourDay = document.querySelector('#day-4');
    forecastFourDay.textContent = moment().add(4, 'days').format("dddd");

    const forecastFourDate = document.querySelector('#date-4');
    let unixDateF4 = new Date(weather.daily[4].dt*1000).toLocaleDateString('en-AU');
    forecastFourDate.textContent = unixDateF4;

    const forecastFourTemp = document.querySelector('#temp-4');
    forecastFourTemp.textContent = `Temp: ${weather.daily[4].temp.day}°C`;

    const forecastFourWind = document.querySelector('#wind-4');
    forecastFourWind.textContent = `Wind: ${weather.daily[4].wind_speed} km/h`;

    const forecastFourHumid = document.querySelector('#humid-4');
    forecastFourHumid.textContent = `Humidity: ${weather.daily[4].humidity}%`;
    

    const iconLocation5 = `https://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}@2x.png`;
    const forecastFiveIcon = document.querySelector('#icon-5');
    forecastFiveIcon.setAttribute('src', iconLocation5);

    const forecastFiveDay = document.querySelector('#day-5');
    forecastFiveDay.textContent = moment().add(5, 'days').format("dddd");

    const forecastFiveDate = document.querySelector('#date-5');
    let unixDateF5 = new Date(weather.daily[5].dt*1000).toLocaleDateString('en-AU');
    forecastFiveDate.textContent = unixDateF5;

    const forecastFiveTemp = document.querySelector('#temp-5');
    forecastFiveTemp.textContent = `Temp: ${weather.daily[5].temp.day}°C`;

    const forecastFiveWind = document.querySelector('#wind-5');
    forecastFiveWind.textContent = `Wind: ${weather.daily[5].wind_speed} km/h`;
    
    const forecastFiveHumid = document.querySelector('#humid-5');
    forecastFiveHumid.textContent = `Humidity: ${weather.daily[5].humidity}%`;



    uvColorCode(weather);
} 

function uvColorCode(weather){

    const uvi = weather.current.uvi;
    let uviRating = '';
    const mainUV = document.querySelector('#main-uv');
    
    if (uvi >= 0 && uvi <= 2) {
        mainUV.classList.add('bg-green-400');
        uviRating = '[Low]';
    } else if (uvi > 2 && uvi <= 5) {
        mainUV.classList.add('bg-yellow-400');
        uviRating = '[Moderate]';
    } else if (uvi > 5 && uvi <= 7) {
        mainUV.classList.add('bg-orange-400');
        uviRating = '[High]';
    } else if (uvi > 7 && uvi <= 10) {
        mainUV.classList.add('bg-red-400');
        uviRating = '[Very High]';
    } else if (uvi > 5 && uvi <= 7) {
        mainUV.classList.add('bg-violet-400');
        uviRating = '[Extreme]';
    }
    
    mainUV.textContent = `UV Index: ${uvi} ${uviRating}`;

}