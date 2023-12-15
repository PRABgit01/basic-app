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

export const Alerts = ({ message,message2,message3,message4 }) => {
  return (
    <div>
      <AlrtPrimary>{message}</AlrtPrimary>
      <AlrtSecondary>
        {message2="Primary! This is a Primary Alert - Check it now!" }
      </AlrtSecondary>
      <AlrtDngr>{message3="Primary! This is a Primary Alert - Check it now!"}</AlrtDngr>
      <AlrtSuccess>
        {message4="Primary! This is a Primary Alert - Check it now!"}
      </AlrtSuccess>
    </div>
  );
};

export const Outlinedalert = (outlinemessage1,outlinemessage2,outlinemessage3,outlinemessage4) => {
  return (
    <div>
      <AprimaryOutl>
        {outlinemessage1="Primary! This is a Primary Alert - Check it now!"}
      </AprimaryOutl>
      <ASecondaryOutl>
        {outlinemessage2="Primary! This is a Primary Alert - Check it now!"}
      </ASecondaryOutl>
      <ASuccessOutl>
        {outlinemessage3="Primary! This is a Primary Alert - Check it now!"}
      </ASuccessOutl>
      <ADngrOutl>{outlinemessage4="Primary! This is a Primary Alert - Check it now!"}</ADngrOutl>
    </div>
  );
};
