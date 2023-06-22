import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItem] = useState([]);
  function handleInputItem(event) {
    setInputItem(event.target.value);
  }
  function addItem() {
    setItem((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputItem} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <Item text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
