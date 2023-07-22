import React, { useState } from "react";

function Item({ id, item, setItems }) {

  const [isDone, setIsDone] = useState(false);

  function handleChange(preValue) {
    setIsDone((preValue) => {
      return !preValue;
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <li
      onDoubleClick={() => { deleteItem(id) }}
      onClick={handleChange}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {item}
    </li>
  );
}

export default Item;
