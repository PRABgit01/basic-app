
import React from 'react'
import { PrimaryOutl,SecondaryOutl,SuccessOutl,DngrOutl} from './outlined.style'

const OutlinedB=()=> {
  return (
    <div>
      <PrimaryOutl style={{ marginRight: "10px" }}>PRIMARY BUTTON</PrimaryOutl>
      <SecondaryOutl style={{ marginRight: "10px" }}>SECONDARY BUTTON</SecondaryOutl>
      <SuccessOutl style={{ marginRight: "10px" }}>SUCCESS BUTTON</SuccessOutl>
      <DngrOutl>WARNING BUTTON</DngrOutl>
      
    </div>
  );
};

export default OutlinedB;
