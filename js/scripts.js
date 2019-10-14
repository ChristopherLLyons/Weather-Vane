(function () {
    getWeatherInfo();
})();

//Function to connect to the Dark Sky API and get weather data
function getWeatherInfo() {
    //https://api.darksky.net/forecast/e920b00f78237235f06f1992abe56799/37.8267,-122.4233
    //Base-URL/APIKey/Latitude, Longitude

    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267, -122.4233", { dataType: "jsonp" })
    .done(function(data) {
        console.log(data);
    })
    .fail(function(error) {
        console.log(error)
    })
    .always(function() {
        console.log("Weather Call Complete!")
    })
}

//Function to connect to the MapQuest Geocoding API and get geocoding data
function geocode() {

}