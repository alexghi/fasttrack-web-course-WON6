const url = "https://weatherdbi.herokuapp.com/data/weather/oradea";

window.addEventListener("load", () => {
  const container = document.getElementById("bottom_container");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tmp_crt_c = document.getElementById("temp_curenta_celsius");
      const tmp_crt_f = document.getElementById("temp_curenta_fahrenheit");

      const temp_curenta_c = data.currentConditions.temp.c;
      const temp_curenta_f = data.currentConditions.temp.f;

      tmp_crt_c.textContent = temp_curenta_c;
      tmp_crt_f.textContent = temp_curenta_f;

      for (let i = 0; i < data.next_days.length; i++) {
        const info_zilnic = document.createElement("div");
        const ziua = document.createElement("div");
        const max_celsius = document.createElement("div");
        const max_fahr = document.createElement("div");
        const min_celsius = document.createElement("div");
        const min_fahr = document.createElement("div");

        const poza = document.createElement("img");

        max_fahr.style.visibility = "hidden";
        min_fahr.style.visibility = "hidden";
        info_zilnic.style.border = "solid 1px grey";
        info_zilnic.style.padding = "10px";
        info_zilnic.style.textAlign = "center";
        max_celsius.style.backgroundColor = "orange";
        min_celsius.style.backgroundColor = "blue";

        const zilnic = data.next_days[i];

        const ziua_saptamanii = zilnic.day;
        const max_temp_celsius = zilnic.max_temp.c;
        const max_temp_f = zilnic.max_temp.f;

        const min_temp_celsius = zilnic.min_temp.c;
        const min_temp_f = zilnic.min_temp.f;

        const imagineURL = zilnic.iconURL;
        poza.src = `${imagineURL}`;

        ziua.textContent = `${ziua_saptamanii}`;
        max_celsius.textContent = `${max_temp_celsius}`;
        max_fahr.textContent = `${max_temp_f}`;
        min_celsius.textContent = `${min_temp_celsius}`;
        min_fahr.textContent = `${min_temp_f}`;

        max_celsius.addEventListener("click", () => {
          max_celsius.textContent = max_fahr.textContent;
        });
        min_celsius.addEventListener("click", () => {
          min_celsius.textContent = min_fahr.textContent;
        });

        info_zilnic.append(ziua, poza, max_celsius, min_celsius);
        container.appendChild(info_zilnic);
      }
    });
});
