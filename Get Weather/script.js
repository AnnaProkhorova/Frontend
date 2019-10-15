let inputCity = document.getElementById('city_input');
let find_button = document.getElementById('find_button');

find_button.disabled = true;

function setButtonStatus() {
  find_button.disabled = !this.value;
}

function receiveDataByCityName() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
  .then(function (response) {
      return response.json();
  })
  
  .then(function (response) {
    let cityName = response.name;
    let info = document.getElementById('info');
    if(cityName == undefined) {
      info.style.display = "none";
    }
    document.getElementById('cityLocation').innerHTML = `${response.name}`;
    document.getElementById('humidity').innerHTML = `Humidity: ${response.main.humidity}%`;
    document.getElementById('pressure').innerHTML = `Pressure: ${response.main.pressure}hPa`;
    document.getElementById('temperature').innerHTML = `Temperature: ${Math.round(+response.main.temp - 273.15, 2)}℃`;
    document.getElementById('wind-speed').innerHTML = `Wind speed: ${response.wind.speed}mps`;
    document.getElementById('feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.weather[0]['icon']}@2x.png">`;
    document.getElementById('summary').innerHTML = `${response.weather[0].main}`;
  })
  inputCity.value = '';
}

inputCity.addEventListener('input', setButtonStatus);
find_button.addEventListener('click', receiveDataByCityName);




function getWeather() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      displayWeather(position.coords.latitude, position.coords.longitude);
      })
    } else {
      alert("Could not get location.");
  }
}

function displayWeather(lat, long) {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ long +'&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
  .then(function (response) {
      return response.json();
  })
  .then(function (response) {
    document.getElementById('location').innerHTML = `${response.name}`;
    document.getElementById('current-humidity').innerHTML = `Humidity: ${response.main.humidity}%`;
    document.getElementById('current-pressure').innerHTML = `Pressure: ${response.main.pressure}hPa`;
    document.getElementById('current-temperature').innerHTML = `Temperature: ${Math.round(+response.main.temp - 273.15, 2)}℃`;
    document.getElementById('current-wind-speed').innerHTML = `Wind speed: ${response.wind.speed}mps`;
    document.getElementById('current-feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.weather[0]['icon']}@2x.png">`;
    document.getElementById('weather-summary').innerHTML = `${response.weather[0].main}`;
  })
}