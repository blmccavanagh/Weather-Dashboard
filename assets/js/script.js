// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// My API key
// ae822aef9413bb77b74f555fff250166


// 

var learning = "";

function mainDisplay () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Perth&units=metric&appid=ae822aef9413bb77b74f555fff250166")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        learning = data;
    });
}

mainDisplay();
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