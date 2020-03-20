import React, { useState, useEffect } from "react";
const InputForm = ({ ...props }) => {
  const [name, setName] = useState("Andrew");
  const [count, setCount] = useState(0);
  //  useEffect(() => {
  //    console.log("Efferct");
  //  });
  console.log("---InputForm START---");
  console.log("Name->" + name);
  console.log("---InputForm END---");
  const formClick = () => {
    setName(name + count);
    setCount(count + 1);
  };
  return <input type="button" value={name} onClick={formClick} />;
};
export default InputForm;
