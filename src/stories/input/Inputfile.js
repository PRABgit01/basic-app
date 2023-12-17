import React from "react";
import { InputContainer, InputtContainer, InputText,InputText2,InputContainer2 } from "./inpuntfile.style";

export const InputMain = () => {
  return (
    <div>
      <InputtContainer>
      <div>
      <InputText>Username*</InputText>
      <InputContainer></InputContainer>
      <InputText2>Password*</InputText2>
      <InputContainer2></InputContainer2>
      <InputText2>Password is incorrect</InputText2>
      </div>
      </InputtContainer>
    </div>
  );
};
