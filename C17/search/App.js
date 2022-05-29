import { useState } from "react";
import THANK_U_NEXT from "./THANK_U_NEXT";
import "./styles.css";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((song) => song.name.includes(query));
};

export default function App() {
  const [query, setQuery] = useState("");

  const { tracks } = THANK_U_NEXT;
  const { items } = tracks;
  // items looks like this: [{name: 'name1'}, {name: 'name2'}]

  const filteredItems = getFilteredItems(query, items);

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value.name}>{value.name}</h1>
        ))}
      </ul>
    </div>
  );
}
