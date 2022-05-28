import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const list = [
    "banana",
    "apple",
    "orange",
    "mango",
    "pineapple",
    "watermelon"
  ];

  const [filterList, setFilterList]=useState(list);

  function handleSearch(e){
    if(e.target.value===""){
      setFilterList(list);
      return
    }
    const filteredValues = list.filter(
      (item) =>
        item.indexOf(e.target.value) !== -1
    );
    setFilterList(filteredValues);
  }

  return (
    <div className="App">
      <div>
        Search:<input type="text" onChange = {handleSearch}/>
        {filterList.map((item, index)=>(
        <div key={index}>{item}</div>))}
      </div>

    </div>
  );
}

export default App;
