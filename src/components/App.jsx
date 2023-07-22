import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./app.css"

function App() {

  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleInputItem(event) {
    setInputItem(event.target.value);
  }
  
  function addItem() {
    if (inputItem !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputItem];
      });
      setInputItem("");
    }
  }

  useEffect(() => {
		const savedItems = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedItems) {
			setItems(savedItems);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(items)
		);
	}, [items]);

  return (
    <div className="container">
      <div className="heading">
        <h1>Check-It</h1>
      </div>
      <div className="form">
        <input
          onChange={handleInputItem}
          type="text" value={inputItem}
          onKeyDown={(e) => {
            e.key === "Enter" && addItem();
          }} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Item
              id={index}
              item={item}
              setItems={setItems} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
