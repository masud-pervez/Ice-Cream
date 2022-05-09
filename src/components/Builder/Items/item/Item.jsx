import React from "react";
import classes from "./Item.module.css"

const Item = ( {name} ) => {
  return (
    <li className={classes.item}>
      <span>{name}</span>
      <span className={classes.quantity}>2</span>
      <div className="right">
        <button type="button" className={[classes.plus, "rounded"].join(" ")}>
          +
        </button>
        <button type="button" className={[classes.minus, "rounded"].join(" ")}>
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
