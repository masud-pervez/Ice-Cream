import React from "react";
import classes from "./Item.module.css";
import { countBy } from "lodash";

const Item = ({ name, add, remove, scoops ={} }) => {
  const scoopByCount = countBy(scoops);
  const str = name;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <li className={classes.item}>
      <span>{str2}</span>
      {scoopByCount[name] >= 0 ? (
        <span className={[classes.quantity, "px-2 text-dark"].join(" ")}>{scoopByCount[name]}</span>
      ) : null}
      <div className="right">
        <button
          onClick={add.bind(this, name)}
          type="button"
          className={[classes.plus, "rounded"].join(" ")}
        >
          +
        </button>
        <button
          onClick={remove.bind(this, name)}
          type="button"
          className={[classes.minus, "rounded"].join(" ")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
