
var APIKey = "45943224f1c4d4f4cace2f1863924b15";
var city;
var stateCode;
var queryURL = "https://home.openweathermap.org/api_keys";
var clearButton = document.getElementById("clear-button");
var weatherContainer;


//moved the call into the fetch api. might need to make new call.



// https://home.openweathermap.org/api_keys/45943224f1c4d4f4cace2f1863924b15
// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

// fetch(api.openweathermap.org / data / 2.5 / weather ? q = city & appid="https://home.openweathermap.org/api_keys/45943224f1c4d4f4cace2f1863924b15")
//     .then(function (response) { //need to add state above
//         return response.json.apply();
//     })
//     .then(function (data) {
//         console.log(data);
//         for (var i = 0; i < DataView; i++) {
//             var city = document.getElementsByClassName("");
//             var stateCode = document.getElementsByClassName("");
//             weatherContainer.append(city,stateCode)
//          
//Do something with the data here
//});

function clear() {
    weatherContainer.innerHTML = null; //make sure class in html or move
}

fetchButton.addEventListener("click", getApi); //why get api not green
clearButton.addEventListener("click", clear);
// fetchButton.addEventListener("click", getApi);
