import React, { Fragment } from "react";
import withNLS from "../component/i18n";

const Addresses = ({ ...props }) => {
  console.log("---Addresses START---");
  //  console.log("NLS->" + NLS);
  console.log(Object.keys(props).map(key => key + "=" + props[key]));
  console.log("---Addresses END---");
  return (
    <Fragment>
      <div {...props}>ADDRESS</div>
    </Fragment>
  );
};

//export default Addresses;
export default withNLS("calling NLS")(Addresses);
