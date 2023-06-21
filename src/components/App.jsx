import React, { useState } from "react";

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
        <h1>Check-It</h1>
      </div>
      <div className="form">
        <input onChange={handleInputItem} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
