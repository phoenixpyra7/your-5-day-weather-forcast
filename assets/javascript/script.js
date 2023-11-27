
var APIKey = "45943224f1c4d4f4cace2f1863924b15";











fetch ("")
    .then(function(response) {
        return response.json.apply();
    })
    .then(function(data) {
        console.log(data);
        //Do something with the data here
    });