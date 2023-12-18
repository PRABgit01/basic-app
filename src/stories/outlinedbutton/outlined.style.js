
import styled from "styled-components";
import theme from "../theme";

export const PrimaryOutl = styled.button`
  border: 2px solid ;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius :2px;
border-top-right-radius :2px;
  color: ${theme.primary};
  padding: 10px 20px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const SecondaryOutl = styled.button`
  border: 2px solid black ;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius :2px;
border-top-right-radius :2px;
  color: black;
  padding: 10px 20px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
export const SuccessOutl = styled.button`
  border: 2px solid ;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius :2px;
border-top-right-radius :2px;
  color: ${theme.success};
  padding: 10px 20px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const DngrOutl = styled.button`
  border: 2px solid ;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius :2px;
border-top-right-radius :2px;
  color: ${theme.warning};
  padding: 10px 20px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;