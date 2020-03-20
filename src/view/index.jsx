import React, { useState, Fragment } from "react";
import withNLS from "../component/i18n";
import InputForm from "./form";

const Addresses = ({ ...props }) => {
  //function Addresses({ ...props }) {
  console.log("---Addresses START---");
  //  console.log("NLS->" + NLS);
  console.log(Object.keys(props).map(key => key + "=" + props[key]));
  console.log("This->" + this);
  console.log("---Addresses END---");
  const [address, setAddress] = useState(0);
  const handleAddress = () => {
    setAddress(address + 1);
  };
  return (
    <Fragment>
      <div {...props}>ANDREW ADDRESSS</div>
      <br />
      <InputForm attr1={address} childHandleAddress={handleAddress} />
    </Fragment>
  );
};

//export default Addresses;
export default withNLS("calling NLS")(Addresses);
