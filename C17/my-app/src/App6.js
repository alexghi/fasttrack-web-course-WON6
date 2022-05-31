import React, { useState } from "react";

function App6() {
  const checkList = [
    "Breakfast",
    "Meeting",
    "Homework",
    "Dinner",
    "Shopping",
    "Running",
    "Relaxing",
  ];

  return (
    <div className="App6">
      <h3>CheckList</h3>
      <div className="CheckList">
        {checkList.map((item, index) => (
          <CheckListItemComponent checkListItem={item}  />//instantiez componenta, o creez!!
        ))}
      </div>
    </div>
  );
}

function CheckListItemComponent({checkListItem}) {
  const [checked, setChecked] = useState(false);
  const checkedOrNotChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="CheckListItem" >
      <input
        value={checkListItem}
        type="checkbox"
        onChange={() => {
          checkedOrNotChecked();
        }}
      />
      <span>{checkListItem}</span>
    </div>
  );
}

export default App6;
