import React, { useState } from "react";

function Item(props) {
  const [isDone, setIsDone] = useState(false);

  function handleChange(preValue) {
    setIsDone((preValue) => {
      return !preValue;
    });
  }

  return (
    <li
      onClick={handleChange}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default Item;
