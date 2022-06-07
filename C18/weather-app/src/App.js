import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function DayComponent({ name, icon, about, maxtemp, mintemp }) {
  return (
    <div className="Today">
      {name}
      <img src={icon} />
      <div className="Maxtemp">
        {maxtemp}
        <div className="Mintemp">{mintemp}</div>
        <div className="Today-picture">{about}</div>
      </div>
    </div>
  );
}

function App() {
  const [data, setData] = useState({ next_days: [] });

  useEffect(() => {
    fetch(`https://weatherdbi.herokuapp.com/data/weather/oradea`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <div className="Search-box">
          <br></br>
          <input type="text" className="search-bar" placeholder="Search..." />
          <h3>Weather APP</h3>
          <br></br>
          <div className="Location">{data.region}</div>
        </div>
        <br></br>
        <div className="Days">
          {data.next_days.map((day) => (
            <DayComponent
              name={day.day}
              about={day.comment}
              icon={day.iconURL}
              maxtemp={day.max_temp.c}
              mintemp={day.min_temp.c}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
