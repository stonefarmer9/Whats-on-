const appKey = "f0c51c29311eaeb3b51c2e4aee6f239f"

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if(event.key === "Enter") {
    findWeatherDetails();
  }
}
function findWeatherDetails() {
  if (searchInput.value === "") {

  } else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
    httpRequestAsync(searchLink, theResponse);
  }
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity +"%";
}

function httpRequestAsync(url, callback){
  console.log("Hello there....General Kenobi");
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
    callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true);
  httpRequest.send();
}
