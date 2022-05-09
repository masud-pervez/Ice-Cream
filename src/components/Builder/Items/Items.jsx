import React from "react";
import Item from "./item/Item";

const Items = ({ items }) => {
  const flavors = Object.keys(items);

  return (
    <ul>
      {flavors.map((flavor) => (
        <Item 
        key={flavor} 
        name={flavor}
        /> 
      ))}
    </ul>
  );
};

export default Items;
