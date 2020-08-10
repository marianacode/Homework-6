const startDate = moment().format("MM/DD/YYYY");
const day1 = moment().add(1, "days").format("MM/DD/YYYY");
const day2 = moment().add(2, "days").format("MM/DD/YYYY");
const day3 = moment().add(3, "days").format("MM/DD/YYYY");
const day4 = moment().add(4, "days").format("MM/DD/YYYY");
const day5 = moment().add(5, "days").format("MM/DD/YYYY");

$(document).ready(function() {
console.log("ready!");

$("#basic-text1").on("click", function(event) {
    event.preventDefault();
    const cityInput = $("#input").val();
    const allCities = [];

    allCities = JSON.parse(localStorage.getItem("allCities"))|| [];
    allCities.push(cityInput);
    localStorage.setItem("allCities", JSON.stringify(allCities));

    showWeather(cityInput);
}) 
});

function showWeather(cityInput) { 

    $("#dailyWeather").empty();
    $("#fiveday").empty();
    $("#day1").empty();
    $("#day2").empty();
    $("#day3").empty();
    $("#day4").empty();
    $("#day5").empty();

    const oneDay ="https://api.openweathermap.org/data/2.5/weather?q=" 
    + cityInput + "&units=imperial" + "&appid=4a66f4b8c2e64a35f3d8e1aad7a55b96";
    console.log("oneDay", oneDay);

    $.ajax({ 
        url: oneDay,
        method: "GET",    
    }).then(function(response) {
        
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";  
        let lat = response.coord.lat; 
        let lon = response.coord.lon;
    }
    )

}