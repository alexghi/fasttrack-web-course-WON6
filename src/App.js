import logo from "./logo.svg";
import "./App.css";
import data from "./population_data.js";

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div className="container" key={data.ID_Nation}>
            <div >{item.Nation}</div>
            <div>{item.Year}</div>
            <div>{item.Population}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
