
var APIKey = "45943224f1c4d4f4cace2f1863924b15";
// var city = "";
var queryURL = "https://home.openweathermap.org/api_keys";
var clearButton = document.getElementById("clear-button");
var fetchButton = document.getElementById("fetch-button");
var results = document.querySelector(".results");
var weatherContainer;
var qInput = document.querySelector("#q");
var fiveDayWeather = document.querySelector(".five-day-weather");
var currentDate = document.querySelector(".current-date")
var imageUrl = "https://openweathermap.org/img/w/";

// api for the geo location
function getGeoWeather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?appid=45943224f1c4d4f4cace2f1863924b15&lat=" + lat + "&lon=" + lon + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var arr = data.list;
            // console.log(data.list[0].main.temp);
            for (let i = 0; i < arr.length; i+=8) {
                //cannot remember why a back tic, may also want change name back to card
                var fiveDayWeathercard = ` 
                <div class="card m-1 p-3">
                <p class="current-date">${dayjs(data.list[i].dt_txt).format('M/D/YYYY')}</p>
                <img src="${imageUrl}${arr[i].weather[0].icon}.png" alt="one of many possible icons of the weather">
                <p class="temperature">Temp:${arr[i].main.temp}</p>
                <p class="wind">Wind: ${arr[i].wind.speed}</p>
                <p class="humidity">Humidity: ${arr[i].main.temp}</p>
                </div>
                ` //cannot remember why a back tic
                var dataHtml = document.createElement("div");
                dataHtml.innerHTML = card;
                fiveDayWeather.appendChild(dataHtml);
                console.log(arr[i]);
            }

            // var todaysWeather = data.list[0].main.temp;
            // var todaysWeatherP = document.createElement("p");
            // todaysWeatherP.textContent = todaysWeather;
            // //results.appendChild(todaysWeatherP);
            // add more then the temp to this section
        })
};
// api for weather
function getCityGeoData(city) {
    var city = qInput.value;
    // console.log(city)
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=45943224f1c4d4f4cace2f1863924b15")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getGeoWeather(lat, lon);
            localStorage.setItem(city, data);
        })
}
// function getCityWeatherForcast {
//     loadForcastFromLocalStorage(city, data);
//     console.log()
// }
// getCityGeoData();
// this code stopped the temp from appearing on the page

fetchButton.addEventListener("click", function (event) {
    event.preventDefault();
    getCityGeoData();
});
// clearButton.addEventListener("click", clear);

