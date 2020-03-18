import React from "react";

const withNLS = localNLS => ComponentWithNLS => ({ ...props }) => {
  console.log("---withNLS START---");
  console.log({ ...props });
  console.log(localNLS);
  console.log(ComponentWithNLS);
  console.log("---withNLS END---");
  const NLS = "ENGLISH-NLS";
  return <ComponentWithNLS NLS={NLS} {...props} />;
};

export default withNLS;
