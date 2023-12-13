import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid;
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "pink"};
  color: ${(props) =>
    props.variant === "outline" ? "green" : "blue"};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
