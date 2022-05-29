import React, { useState } from "react";

const App3 = () => {
  const [vacations, setVacations] = useState([
    { name: "The Pyramids", country: "Egypt", id: 1 },
    { name: "The Grand Canyon", country: "USA", id: 2 },
    { name: "Bondi Beach", country: "Australia", id: 3 },
  ]);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Here is Assignment nr.3</h3>
      <div className="App">
        {vacations.map((vacation) => (
          <div className="Design" key={vacation.id}>
            <h2>{vacation.name}</h2>
            <h4>In this country:{vacation.country}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App3;
