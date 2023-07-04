import React from "react";

export default function List({ items, children }) {
  console.log(items);

  return <ul className="list">{children}</ul>;
}
