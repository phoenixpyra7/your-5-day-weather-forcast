
var APIKey = "45943224f1c4d4f4cace2f1863924b15";
var city;
var stateCode;
var queryURL = "https://home.openweathermap.org/api_keys"












fetch (api.openweathermap.org/data/2.5/weather?q=city&appid="https://home.openweathermap.org/api_keys/45943224f1c4d4f4cace2f1863924b15")
    .then(function(response) {
        return response.json.apply();
    })
    .then(function(data) {
        console.log(data);
        //Do something with the data here
    });