
import styled from "styled-components";

export const Icnoutline = styled.button`
  border: 2px solid; // Add a unit (e.g., pixels)
  background-color: #f3f4f6;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: #ff4e54;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #ff4e54;
    color: #ffffff;

  }
`;

export const Icnfullline = styled.button`
  border: 2px solid #ff4e54; // Add a unit (e.g., pixels)
  background-color: #ff4e54;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #ff4e54;
    color: black;

  }
`;