const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let searchInput = document.querySelector('.search');
let cities = [];
let listOfCity = document.getElementById('listOfCity');
let clear = document.getElementById('clear');
let filteredCities;

fetch(endpoint)
  .then(response => response.json())
  .then(response => cities.push(...response));

function findMatches() {
  filteredCities = cities.filter(place => {
    if( place.city.toLowerCase().startsWith(this.value.toLowerCase()) ) {
        return place;
    }
  });
  displayResults(filteredCities);
}

function assignEvent(filteredCities) {
  for (let idx = 0; idx < filteredCities.length; idx += 1) {
    var elem = document.getElementById(`info${idx}`);
    elem.addEventListener('click', showInformation);
    if(idx === 9) {
        break;
    }
  }
}

function displayResults(filteredCities) {
  listOfCity.style.display = 'block';
  listOfCity.style.overflow = 'hidden';
  listOfCity.innerHTML = '';

  for(let i = 0; i < filteredCities.length; i += 1) {
      let length = searchInput.value.length;
      listOfCity.innerHTML += 
      ` <li id='info${i}'>
          <b>${filteredCities[i].city.substring(0, length)}</b>${filteredCities[i].city.substring(length)}<br>
        </li>
      `
      if(i === 9) {
          break;
      }
  }
  assignEvent(filteredCities);
}

function showInformation(elem) {
  let idx = +elem.srcElement.id.split("info")[1];
  listOfCity.innerHTML = '';
  listOfCity.innerHTML += 
  ` <li>
      State: ${filteredCities[idx].state}
    </li>

    <li class='cityList'>
      Population: ${filteredCities[idx].population}
    </li>
  `
}

function clearInput() {
  searchInput.value = '';
  listOfCity.style.display = 'none';
}

clear.addEventListener('click', clearInput);
searchInput.addEventListener('keyup', findMatches);
