import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = () => {
  
  // const flavors = Object.keys();
  // console.log(flavors);

  return (
    <div>
      <div>
        <div className={classes.icecream}>
          <p className={classes.cone} />
          <Scoop/>
          <div className={classes.cherry} />
        </div>
      </div>
      {/* <!-- ice cream end --> */}
    </div>
  );
};

export default IceCream;
