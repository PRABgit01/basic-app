import styled from "styled-components";
import theme from '../theme';

export const CardContainer=styled.div`
    background-color: lightpink;
    display: flex;
    gap: 0.3px;
    padding: 2px 2.5px;
    /* background-color: var(--active-color); */
    border-radius: 0.5px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 50px 

;
  
`

export const CardBasic=styled.div`
display: flex;
    /* gap: 1rem; */
    flex-flow: column;
    height: min-content;
    max-width: 30rem;
    /* background-color: var(--off-white); */
    border-radius: 5px;
    padding: 0.5rem; /* Adjust the top and bottom padding */
    transition: 500ms;
    background-color: ${theme.white};
    &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a box shadow on hover */
  }
`
export const CardTitle=styled.h4`
font-family: 'Rubik', sans-serif;
color: ${theme.primary};

`
export const CardContent=styled.p`
font-family: 'Rubik', sans-serif;
color: black;

`

export const CardBadgess = styled.div`
  display: flex;
  gap: 0.5rem; /* Adjust gap */
  flex-flow: column;
  height: 400px;
  max-width: 20rem; /* Adjust max width */
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 0.5rem; /* Adjust padding */
  transition: 500ms;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); /* Adjust box shadow on hover */
  }
`;

export const ImagesBadge=styled.img`
border-radius: 5px;
    width: 100%;
`

export const SmallLogo=styled.div`
  position: absolute;
  top: 60px;
  left: 34%; /* Center the element horizontally */
  transform: translateX(-29); /* Adjust for centering */
  background-color: ${theme.primary};
  color: ${theme.white};
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  padding: 0.5rem 1rem;
`

export const PrimaryOutl = styled.button`
  border: 2px solid ;
  width: 100;
  background-color: ${theme.white};
  border-top-left-radius :2px;
border-top-right-radius :2px;
  color:${theme.primary} ;
  padding: 10px 20px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

export const PrimaryoutHorizonatl=styled(PrimaryOutl)`
  width: 100%;

`

export const CrossLogo=styled.div`
  position: absolute;
  top: 60px;
  left: 59.1%; /* Center the element horizontally */
  transform: translateX(-29); /* Adjust for centering */
  background-color: ${theme.primary};
  color: ${theme.white};
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  padding: 0.5rem 1rem;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5); 
  }
`

export const OutOffStocks=styled.div`
  position: absolute;
  top: 120px;
  left: 43.7%; /* Center the element horizontally */
  transform: translateX(-29); /* Adjust for centering */
  /* background-color: ${theme.primary}; */
  color: ${theme.white};
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  padding: 0.5rem 1rem;
  
`

export const HozizonatalBadgess = styled.div`
  display: flex;
  gap: 0.5rem; /* Adjust gap */
  /* flex-direction: column; */
  justify-content: flex-start;
  height: 190px;
  max-width: 250rem; /* Adjust max width */
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 0.5rem; /* Adjust padding */
  transition: 500ms;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); /* Adjust box shadow on hover */
  }
` 

export const HorizontalBadgeimages=styled.img`
border-radius: 5px;
    width: 20%;
    height: 30%;
`