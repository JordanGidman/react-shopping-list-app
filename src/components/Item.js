import React from "react";

export default function Item({ children, onDeleteItems, id }) {
  return (
    <li className="item">
      <p className="item-text">{children}</p>
      <button onClick={() => onDeleteItems(id)} className="delete-item-btn">
        ❌
      </button>
    </li>
  );
}
