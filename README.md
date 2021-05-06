# Weather-Dashboard

## This Github repository contains the code for a weather dashboard, allowing a user to search for weather data based on entering a location

### The weather dashboard displays the current weather data for the location entered by the user, including weather conditions, temperature information, wind speed, humidity, the UVI and sunrise/sunset times. It also displays weather forcast details for the next 5 days

---

## Motivation & Research

I was motivated to develop this website to provide detailed weather data based on a users location, while practicing a diverse set of skills across web development languages and tools.

My research focussed primarily on the OpenWeatherMap API and object syntax in order to get the information required to populate the website with the returned data. Branding and front end web development to provide a great user experience and an attractive interface for the end user to access the weather information returned from the API was also key to the success of this project.

## Development

### Web development technologies

Development of the website was centered around the use of the OpenWeatherMap API to build the JavaScript to create a functional application; working with OpenWeatherMap's APIs to access, retrieve and store weather data. I was also able to further develop my CSS skills, by utilising TailwindCSS to develop the website's layout and design combined with my own styling for the website to be on brand with my portfolio of development work. 

The languges and tools used to build this website include:

* HTML5
* JavaScript ES6
* CSS3
* Tailwind CSS :
    * https://tailwindcss.com/
* Google Fonts :
    * https://fonts.google.com/
* Font Awesome Icons :
    * https://fontawesome.com/icons?d=gallery&p=2
* Web APIs :
    * OpenWeatherMap :
        * https://openweathermap.org/
            * Current Weather Data :
                * https://openweathermap.org/current
            * One Call API :
                * https://openweathermap.org/api/one-call-api
    * jQuery :
        * https://jquery.com/
    * Moment.js :
        * https://momentjs.com/
* Unix Timestamp
    * https://www.unixtimestamp.com/

### Graphic design and branding

Working from a template image of the expected UI and functionality I developed the website layout and user interface through my HTML and the use of the TailwindCSS framework. Using the provided image as a starting point I performed heavy customisations by way of CSS styling, applying the branding I have developed for my application portfolio while meeting the specifications of the desired functionality for the application. 

Customisations included layout and styling by utilising the TailwindCSS framework, customised fonts and background images that are consistent with my other portfolio projects. The addition of an on-brand footer with links to contact information, including my Github profile and a download link of my current resume serves as a way to personalize the application.

### Challenges

The development of this application required the use of OpenWeatherMap's Current Weather Data and Once Call APIs to access and return weather data to the application. The use of the One Call API allows for location searches to provide the latitude and longditute values of the locations searched by the user so that the user is able to search for a location by city name; not by having to know the lat and long values of a location, in turn making the application user-friendly.
In order to access the data provided by the APIs I had to familiarise myself with object syntax, particularly dot notation. Application of the aquired development skills enable the application to successfully retrieve the relevant weather data to be displayed by the application.

## Future development opportunities

I aim to continue to develop this website to include:

* The use of Geolocation services to automatically default to showing weather information for the users current location. At present the application has a default location set to Perth, Australia.
* Further refinement of the location input, by allowing the user to refine their searches by city, state or country, while providing default inputs for each field. For example when a user inputs the city name, they are then able to specify the search by country. For example if the user searches for the weather data of "Houston", they can then input country name, in this case America; then the state field will provide a list of state names prepopulated in a drop down menu dynamically when the user clicks the state input.
* The ability for the user to select the time zone to display weather information of other countries in either their own time zone or that of the location searched. 
* Additional use of iconography within the user interface where appropriate, such as the 5 day forcast having graphics showing the weather visually for each day.

<div align="center">

**Thank you for visiting.**

</div>

### Repository Link:

* https://github.com/blmccavanagh/Weather-Dashboard

### Deployed Application Link:

* https://blmccavanagh.github.io/Weather-Dashboard/

### Application Screenshots:

---

<div align="center">

*Desktop Browser View* 

</div>

![Weather Dashboard Desktop Screen Capture](./assets/images/README/weather-dashboard-desktop-screen-capture.jpg)

---

<div align="center">

*Mobile Browser View*

</div>

![Weather Dashboard Mobile Screen Capture](./assets/images/README/weather-dashboard-mobile-screen-capture.png)

---

<div align="center">

*Weather Dashboard Demo*

</div>

![Weather Dashboard Demo](./assets/images/README/weather-dashboard-demo.gif)

---