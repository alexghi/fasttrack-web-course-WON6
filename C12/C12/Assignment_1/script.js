let weatherData;
const week = document.querySelector(".WeatherForWeek");
let isCelsius = true;

fetch("https://weatherdbi.herokuapp.com/data/weather/oradea")
  .then((response) => response.json())
  .then((response) => onResponseReceived(response))
  .catch((err) => console.error(err));

function onResponseReceived(responseData) {
  weatherData = responseData;
  updateWeatherUi();
}

function updateWeatherUi() {
  document.getElementById("Today").innerText =
    weatherData.currentConditions.dayhour;
  document.getElementById("location").innerText = weatherData.region;
  document
    .getElementById("ImgToday")
    .setAttribute("src", weatherData.currentConditions.iconURL);
  document.querySelector(".Info").innerText =
    weatherData.currentConditions.comment;

  document.querySelector(
    ".Temperature"
  ).innerText = `${weatherData.currentConditions.temp.c}°C`;
  let days = weatherData.next_days;
  week.innerHTML = "";

  updateWeekTemperatureUI(days);
}
function updateWeekTemperatureUI(days) {
  for (let i = 0; i < days.length - 1; i++) {
    const maxTemperature = `${days[i].max_temp.c}°C`;
    const minTemperature = `${days[i].min_temp.c}°C`;
    week.innerHTML +=
      '<div class="AllDays">\n' +
      '                    <h1 class="WeatherDays">' +
      days[i].day +
      "</h1>\n" +
      '                    <div class="Weather_Img">\n' +
      "                        <img src=" +
      days[i].iconURL +
      ">\n" +
      '                        <h3 id="about">' +
      days[i].comment +
      "</h3>\n" +
      "                    </div>\n" +
      '                    <div class="Temp_Days">\n' +
      '                        <div class="temp">\n' +
      "                            <div>HIGH</div>\n" +
      '                            <div class="temperature">' +
      maxTemperature +
      "°</div>\n" +
      "                        </div>\n" +
      "\n" +
      '                        <div class="temp">\n' +
      "                            <div>LOW</div>\n" +
      '                            <div class="temperature">' +
      minTemperature +
      "°</div>\n" +
      "                        </div>\n" +
      "                    </div>\n" +
      "                </div>";
  }
}
