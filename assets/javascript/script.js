
var APIKey = "45943224f1c4d4f4cace2f1863924b15";
var city = "Chicago";
var stateCode;
var queryURL = "https://home.openweathermap.org/api_keys";
var clearButton = document.getElementById("clear-button");
var results = document.querySelector(".results");
var weatherContainer;
// var = "#loc-search"; //made an id and that aint working

// api for geo location
function getGeoWeather(lat,lon) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?appid=45943224f1c4d4f4cace2f1863924b15&lat=" + lat + "&lon=" + lon + "&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.list[0].main.temp);
        var todaysWeather = data.list[0].main.temp;
        var todaysWeatherP = document.createElement("p");
        todaysWeatherP.textContent = todaysWeather
        // append to the results
    })
};
// api for weather
function getCityGeoData(city) {
    var city = "Chicago";
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=45943224f1c4d4f4cace2f1863924b15")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getGeoWeather(lat, lon);
        })
}

getCityGeoData();



function weatherSearch(event) {
    event.preventDefaul();
    var format = formatInput.value;
    var q = qInput.value;
    var type = "search";
    if (format) {
        type = format;
    }
    var url = " " + type + '/?q' + q + "&for+json";

    fetch(url)
    .then(function (response) {
        return response.json();
    })
}
//         for (var i = 0; i < DataView; i++) {
//             var city = document.getElementsByClassName("");
//             var stateCode = document.getElementsByClassName("");
//             weatherContainer.append(city,stateCode)
//          
//Do something with the data here
//});

// function clear() {
//     weatherContainer.innerHTML = null; //make sure class in html or move
// }

//why is my get api not green
fetchButton.addEventListener("click", getApi); 
clearButton.addEventListener("click", clear);
fetchButton.addEventListener("click", getApi);
