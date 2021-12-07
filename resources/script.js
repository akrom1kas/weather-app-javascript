let apiKey = '421e28f9e40b05f6974d0fdc39099dec' // jusu api key
let lang = 'lt' // kalba
let units = 'Metric' // naudojama metrine sistema
let city = 'q' // miestas irasytas inpute

let cityName = document.getElementById('city')
let searchButton = document.getElementById('search')


// uzdedu click eventa ant search mygtuko
searchButton.addEventListener('click', getDataFromApi)

// funkcija kuri gauna duomenis is API
function getDataFromApi() {
    // paimu irasyta miesta is input ir nustatau
    city = cityName.value

    // url yra skirtas pasiimti duomenis is api
    let url = 'https://api.openweathermap.org/data/2.5/forecast?' +
        'q=' + city +
        '&units=' + units +
        '&lang=' + lang +
        '&appid=' + apiKey 
        

    // su fetch funkcija pasiimu duomenis is api (asinchronine funkcija)
    fetch(url)
        .then(response => response.json())
        // data => jusu kodas
        .then(function (data) {
            //paduodu gautus duomenis i funkcija
            showWeatherInDom(data)
        });
}
// funkcija kuri gauna duomenis ir juos atvaizduoja
function showWeatherInDom(data) {
        document.querySelector('#city1').innerHTML = data.city.name;
        document.querySelector('#speed').innerHTML = data.list[0].wind.speed + "m/s";
        document.querySelector('#temp').innerHTML = data.list[0].main.temp + "°C";
        document.querySelector('#weather-icon').innerHTML = data.list[0].weather[0].icon;
        document.querySelector('#Description').innerHTML = data.list[0].weather[0].description;

        // cia nustatom icon code is gautu duomenu, kad nustatyi iconCode pirma reikes gautame
        // objekte susirasti icon
        let locationIcon= document.querySelector('#weather-icon');
        const {icon} = data.list[0].weather[0];
        locationIcon.innerHTML = `<img src="icons/${icon}.png">`
        console.log(data)
    }

