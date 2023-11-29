
var APIKey = "45943224f1c4d4f4cace2f1863924b15";
var city;
var stateCode;
var queryURL = "https://home.openweathermap.org/api_keys";
var clearButton = document.getElementById("clear-button");
var weatherContainer;
// var = "#loc-search"; //made an id and that aint working

// api for geo location
function getGeoWeather() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?appid=45943224f1c4d4f4cace2f1863924b15&lat=" + lat + "&lon=" + lon + "&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
};
// api for weather
function getCityGeoData(city) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?appid=45943224f1c4d4f4cace2f1863924b15&limit=1&q=" + city)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            getGeoWeather(data[0].lat, data[0].lon);
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
