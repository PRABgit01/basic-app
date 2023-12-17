import styled from "styled-components";

export const InputtContainer = styled.div`
  background-color: lightpink;
  display: flex;
  flex-direction: column; /* Set the flex direction to column */
  align-items: center;
  border-radius: 5px;
  gap: 10px; /* Use gap instead of row-gap and column-gap */
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  justify-content: right;
  margin: 0 auto;
  padding: 15px 20px;
  max-width: 904px;
`;

export const InputText = styled.p`
  font-family: "Rubik", sans-serif;
  color: black;
  height: 20px; /* Assign a unit to the height property */
`;

export const InputContainer = styled.input`
  width: 100%;
  max-width: 400px;
  height: 2rem;
  border: 1px solid var(--default-color);
  padding: 0.8rem 1.4rem;
  font-size: 1.4rem;
  transition: 0.3s all ease;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const InputText2 =styled(InputText)`
color: red;

`

export const InputContainer2=styled(InputContainer)`
border: 1px solid red;


`