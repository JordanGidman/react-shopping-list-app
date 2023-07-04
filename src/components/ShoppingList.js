export default function ShoppingList({
  onUpdateItems,
  items,

  userInput,
  setUserInput,
  children,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!userInput) return;

    // const newItem = <Item>{userInput}</Item>;
    const newItem = {
      id: Date.now(),
      name: userInput,
    };

    onUpdateItems(newItem);
    setUserInput("");
  }

  return (
    <main className="shopping-list">
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="user-input"
          placeholder="Type an item to start"
        />
        <button className="submit-item-btn">Add Item</button>
      </form>

      {children}
    </main>
  );
}
