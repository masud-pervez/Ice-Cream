import React from "react";
import classes from "./Totalprice.module.css"

const Totalprice = ({price = 0}) => {
  return (
    <div className={classes.total}>
      <div>Total Price</div>
      <div>{price.toFixed(2)} TK</div>
    </div>
  );
};

export default Totalprice;
