window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

var inputCity = document.getElementById('city_input');


recognition.addEventListener('result', function (event) {
  inputCity.value = Array
    .from(event.results)
    .map(function (results) {
      return results[0];
    })
    .map(function (results) {
      return results.transcript;
    })
    receiveDataByCityName();
});


function receiveDataByCityName() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
  .then(function (response) {
      return response.json();
  })
  .then(function (response) {
    let cityName = response.name;
    let info = document.getElementById('info');
    if(cityName == undefined) {
      cityName.innerHTML = 'City is not found';
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

recognition.addEventListener('end', recognition.start);
recognition.start();
