import styled from "styled-components";
import theme from "../theme";

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  flex-wrap: wrap;
  padding: 15px 50px;
  background-color: lightpink;
  border-radius: 0.5px;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
`;

export const NavContainer2 = styled.div`
  background-color:  ${theme.white} ;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  width: 890px;
  gap: 0.3px;
  padding: 2px 2.5px;
  border-radius: 0.5px;
  padding: 15px 50px;
`;

export const TextStyleH1 = styled.h2`
  color:  ${theme.primary} ;
`;

export const TextStyleH2 = styled.a`
  color: purple;
  font-size: 1.6rem;
`;

export const InputContainer = styled.input`
  width: 100%;
  max-width: 400px;
  height: 2rem;
  border: 1px solid;
  padding: 0.8rem 1.4rem;
  font-size: 1.4rem;
  transition: 0.3s all ease;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const PrimaryOutl = styled.button`
  border: 2px solid;
  width: 150;
  height: 30px;
  background-color: ${theme.white} ;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color:  ${theme.cardTextColor} ;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.cardTextColor} ;
    color: ${theme.white} ;
  }
`;

export const HearIcon = styled.img`
  width: 5%;
  height: 5%;
`;

export const BadgeContainer = styled.div`
 border-radius: 50%;
  /* position: absolute; */
  transform: translateX(10px); /* Adjust the horizontal translation as needed */
  display: flex;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 45.5px;
  text-align: center;
  width: 44px;
  position: relative;
  display: contents;
`;

export const BadgeValue = styled.h2`
border-radius: 50%;
  position: absolute;
  top: 53px; /* Adjust top value */
  left: 65%; /* Center horizontally */
  transform: translateX(250%); /* Center horizontally */
  background-color: ${theme.primary};
  color: ${theme.white};
  width: 14px; /* Set width and height to the same value for a perfect circle */
  height: 14px; /* Set width and height to the same value for a perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeValueforCart=styled.div`
border-radius: 50%;
  position: absolute;
  top: 59px; /* Adjust top value */
  left: 75%; /* Center horizontally */
  transform: translateX(250%); /* Center horizontally */
  background-color: ${theme.primary};
  color: ${theme.white};
  width: 14px; /* Set width and height to the same value for a perfect circle */
  height: 14px; /* Set width and height to the same value for a perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
  display: contents;



`

export const BadgeValue2 = styled.h2`
border-radius: 50%;
  position: absolute;
  top: 53px; /* Adjust top value */
  left: 65%; /* Center horizontally */
  transform: translateX(250%); /* Center horizontally */
  background-color: ${theme.primary};
  color: ${theme.white};
  width: 14px; /* Set width and height to the same value for a perfect circle */
  height: 14px; /* Set width and height to the same value for a perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
`;