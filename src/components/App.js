import { useState } from "react";
import "./App.css";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  function updateItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <h1 className="title">Shopping List</h1>
      <ShoppingList
        onUpdateItems={updateItems}
        items={items}
        onDeleteItems={handleDeleteItem}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
}

export default App;
