import React, { useState } from "react";
import "./App.css";

const list = ["Banana", "Mango", "Apple", "Orange", "Pineapple", "Watermelon"];

function App1() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Here is Assignment nr.1</h1><p></p>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div>
        {list
          .filter((item) => {
            if(searchTerm == '') {
              return item
            } else if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item;
            }
            
          })
          .map((item, index) => {
            return <ul key={index}>{item}</ul>;
          })}
      </div>
    </div>
  );
}

export default App1;
