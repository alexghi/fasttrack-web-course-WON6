import React, {useState} from "react";

function App2() {

  const[count,setCount] = useState(0);  

  return (
    <div className="App">
      <h2>Here is Assignment nr.2 </h2>
      <p></p>
      <h1>{count}</h1>
      <div className="Buttons">
         <button onClick={()=>setCount(count-1)}>-</button>
         <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default App2;
