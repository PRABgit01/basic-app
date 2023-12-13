import React from "react";

import { Primary, Secondary, Success, Dngr } from "./buttons.style";


const Buttons = () => {
  return (
    <div>
      <Primary style={{ marginRight: "10px" }}>PRIMARY BUTTON</Primary>
      <Secondary style={{ marginRight: "10px" }}>SECONDARY BUTTON</Secondary>
      <Success style={{ marginRight: "10px" }}>SUCCESS BUTTON</Success>
      <Dngr>WARNING BUTTON</Dngr>
    </div>
  );
};

export default Buttons;

