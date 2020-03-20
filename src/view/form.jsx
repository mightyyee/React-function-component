import React, { useState, useEffect } from "react";
const InputForm = ({ ...props }) => {
  const [name, setName] = useState("Andrew");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("NAME EFFECT->" + name);
  });
  useEffect(() => {
    console.log("COUNT EFFECT->" + count);
  });
  console.log("---InputForm START---");
  console.log("Name->" + name);
  console.log(
    "Props->" + Object.keys(props).map(key => key + "=" + props[key])
  );
  console.log("---InputForm END---");
  const formClick = () => {
    setName(name + count);
    setCount(count + 1);
  };
  return [
    <input
      type="button"
      value={"Parent" + props.attr1}
      onClick={props.childHandleAddress}
    />,
    <br />,
    <input type="button" value={name + count} onClick={formClick} />
  ];
};
export default InputForm;
