











fetch ("")
    .then(function(response) {
        return response.json.apply();
    })
    .then(function(data) {
        console.log(data);
        //Do something with the data here
    });