import styled from "styled-components";

export const ImagesContainer=styled.div`
background-color: lightpink;
align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 180px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: 866px;
`

export const ImagesDesigns=styled.img`
  width: 50;
  max-width: 150px;
  height: auto;
  border-radius: 1px;
`


export const ImagesCircularDesigns=styled.img`
  width: 70;
  max-width: 180px;
  height: auto;
  border-radius: 1px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`

export const ImagesFullDesigns=styled.img`
  display: block;
  font-size: 6px;
  height: auto;
  margin: 0;
  object-fit: cover;
  overflow: hidden;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
 
`

export const ImagefullScreen=styled(ImagesContainer)`
align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 59.5px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: auto;
  height: auto;
  object-fit: cover;
`