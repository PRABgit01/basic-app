import React from "react";
import {
  NavContainer,
  NavContainer2,
  TextStyleH1,
  InputContainer,
  PrimaryOutl,
  HearIcon,
  TextStyleH2,
  BadgeContainer,
  BadgeValue,
  BadgeValueforCart,
  BadgeValue2
} from "./navbar.style";

export const NaveBar = () => {
  return (
    <div>
      <NavContainer>
        <NavContainer2>
          <TextStyleH1>Adorn Box</TextStyleH1>
          <div style={{ display: "flex" }}>
            <InputContainer></InputContainer>
            <PrimaryOutl>Login</PrimaryOutl>
          </div>
          <BadgeContainer>
            <HearIcon
              src="https://adorn-components.netlify.app/assets/images/heartIcon.svg"
              alt="2"
            ></HearIcon>
            <BadgeValue>23</BadgeValue>
            <BadgeValueforCart>

          <HearIcon
            src="https://adorn-components.netlify.app/assets/images/cart-outlined.svg"
            alt="2"
          ></HearIcon>
            
            </BadgeValueforCart>
          </BadgeContainer>

          
          

          <TextStyleH2>Cart</TextStyleH2>
        </NavContainer2>
      </NavContainer>
    </div>
  );
};
