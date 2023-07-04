import { useState } from "react";
import "./App.css";
import ShoppingList from "./ShoppingList";
import List from "./List";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  const listEls = items.map((item) => (
    <Item id={item.id} onDeleteItems={handleDeleteItem} key={item.id}>
      {item.name}
    </Item>
  ));

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
        userInput={userInput}
        setUserInput={setUserInput}
      >
        <List onDeleteItems={handleDeleteItem} items={items}>
          {listEls}
        </List>
      </ShoppingList>
    </div>
  );
}

export default App;
