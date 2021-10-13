import React, { useState } from "react";
import Card from "./Card.jsx";

function App() {
  const [change, setChange] = useState("");
  const [all, addarray] = useState([]);
  function handleChange(event) {
    const name = event.target.value;
    setChange(name);
  }
  function handleAll() {
    addarray((prevAll) => {
      return [...prevAll, change];
    });
    setChange("");
  }
  function deleteItem(id) {
    addarray((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="todo" type="text" onChange={handleChange} value={change} />
        <button class="button" onClick={handleAll}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {all.map((x, index) => (
            <Card key={index} id={index} name={x} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
