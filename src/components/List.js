import React from "react";
import Item from "./Item";

export default function List({ items, onDeleteItems }) {
  console.log(items);
  const listEls = items.map((item) => (
    <Item id={item.id} onDeleteItems={onDeleteItems} key={item.id}>
      {item.name}
    </Item>
  ));

  return <ul className="list">{listEls}</ul>;
}
