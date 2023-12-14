import React from "react";
import {
  AlrtDngr,
  AlrtPrimary,
  AlrtSecondary,
  AlrtSuccess,
  AprimaryOutl,
  ASecondaryOutl,
  ASuccessOutl,
  ADngrOutl,
  
} from "./alserts.style";

export const Alerts = () => {
  return (
    <div>
      <AlrtPrimary>
        Primary! This is a Primary Alert - Check it now!
      </AlrtPrimary>
      <AlrtSecondary>
        Primary! This is a Primary Alert - Check it now!
      </AlrtSecondary>
      <AlrtDngr>
        Primary! This is a Primary Alert - Check it now!
      </AlrtDngr>
      <AlrtSuccess>Primary! This is a Primary Alert - Check it now!</AlrtSuccess>
    </div>
  );
};

export const Outlinedalert = () => {
  return (
    <div>
      <AprimaryOutl>
        Primary! This is a Primary Alert - Check it now!
      </AprimaryOutl>
      <ASecondaryOutl>
        Primary! This is a Primary Alert - Check it now!
      </ASecondaryOutl>
      <ASuccessOutl>
        Primary! This is a Primary Alert - Check it now!
      </ASuccessOutl>
      <ADngrOutl>Primary! This is a Primary Alert - Check it now!</ADngrOutl>
    </div>
  );
};
