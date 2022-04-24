// ctrl + alt + L = JetBrains formatting
let weatherData;
const week = document.querySelector('.weather-week-container');
let isCelsius = true;

window.addEventListener('load', function () {
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('click', isTempToggleButtonClicked);
});

fetch('https://weatherdbi.herokuapp.com/data/weather/cluj-napoca')
    .then(response => response.json())
    .then(response => onResponseReceived(response))
    .catch(err => console.error(err));


function onResponseReceived(responseData) {
    weatherData = responseData;
    updateWeatherUi();
}

function updateWeatherUi() {
    document.getElementById('today-weather-header').innerText = weatherData.currentConditions.dayhour;
    document.getElementById('location').innerText = weatherData.region;
    document.getElementById('today-weather-img').setAttribute('src', weatherData.currentConditions.iconURL);
    document.querySelector('.sky-info').innerText = weatherData.currentConditions.comment;

    document.querySelector('.temperature').innerText = isCelsius ? `${weatherData.currentConditions.temp.c}°C` : `${weatherData.currentConditions.temp.f}°F`;

    let days = weatherData.next_days;
    week.innerHTML = '';

    updateWeekTemperatureUI(days);
}

function updateWeekTemperatureUI(days) {
    for (let i = 0; i < days.length - 1; i++) {
        const maxTemperature = isCelsius ? `${days[i].max_temp.c}°C` : `${days[i].max_temp.f}°F`;
        const minTemperature = isCelsius ? `${days[i].min_temp.c}°C` : `${days[i].min_temp.f}°F`;
        week.innerHTML += "<div class=\"weather-day\">\n" +
            "                    <h1 class=\"weather-day-heading\">" + days[i].day + "</h1>\n" +
            "                    <div class=\"weather-img\">\n" +
            "                        <img src=" + days[i].iconURL + ">\n" +
            "                        <h4>" + days[i].comment + "</h4>\n" +
            "                    </div>\n" +
            "                    <div class=\"day-temperatures\">\n" +
            "                        <div class=\"temp\">\n" +
            "                            <span>HIGH</span>\n" +
            "                            <span class=\"temperature\">" + maxTemperature + "°</span>\n" +
            "                        </div>\n" +
            "\n" +
            "                        <div class=\"temp\">\n" +
            "                            <span>LOW</span>\n" +
            "                            <span class=\"temperature\">" + minTemperature + "°</span>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>"
    }
}

function isTempToggleButtonClicked () {
    isCelsius = !isCelsius;
    updateWeatherUi();
}