import React from "react";
import { SquareAvatar,CircleAvatar } from "./avtar.style";


export const Avtar = () => {
  return (
    <div>
      <SquareAvatar>
          <img
            className="avatar avatar-square sm"
            src="https://i.pravatar.cc/41"
            alt="avatar1"
          />
          <img
            className="avatar avatar-square md"
            src="https://i.pravatar.cc/42"
            alt="avatar2"
          />
          <img
            className="avatar avatar-square lg"
            src="https://i.pravatar.cc/43"
            alt="avatar3"
          />
        </SquareAvatar>
    </div>
  );
};

export const CircuAvtar=()=>{
    return(
        <div>
            <CircleAvatar>
          <img
            className="avatar avatar-circular sm"
            src="https://i.pravatar.cc/43"
            alt="avatar1"
          />
          <img
            className="avatar avatar-circular md"
            src="https://i.pravatar.cc/44"
            alt="avatar2"
          />
          <img
            className="avatar avatar-circular lg"
            src="https://i.pravatar.cc/45"
            alt="avatar3"
          />
        </CircleAvatar>
        </div>
    )
}