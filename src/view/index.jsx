import React, { Fragment } from "react";
import withNLS from "../component/i18n";
import InputForm from "./form";

const Addresses = ({ ...props }) => {
  //function Addresses({ ...props }) {
  console.log("---Addresses START---");
  //  console.log("NLS->" + NLS);
  console.log(Object.keys(props).map(key => key + "=" + props[key]));
  console.log("This->" + this);
  console.log("---Addresses END---");
  return (
    <Fragment>
      <div {...props}>ANDREW ADDRES</div>
      <br />
      <InputForm />
    </Fragment>
  );
};

//export default Addresses;
export default withNLS("calling NLS")(Addresses);
