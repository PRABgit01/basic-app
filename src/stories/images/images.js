import React from "react";
import { ImagesContainer,ImagesDesigns,ImagesCircularDesigns,ImagesFullDesigns,ImagefullScreen } from "./images.style";

export const ImagesDesign = () => {
  return (
    <div>
      <ImagesContainer>
        <ImagesDesigns src="https://picsum.photos/350/350/?blur" alt="hellow">
        </ImagesDesigns>
        <ImagesDesigns src="https://picsum.photos/350/351/?blur" alt='hellow2'></ImagesDesigns>
      </ImagesContainer>
    </div>
  );
};


export const ImagesCircularDesign = () => {
    return (
      <div>
        <ImagesContainer>
          <ImagesCircularDesigns src="https://picsum.photos/350/350/?blur" alt="hellow">
          
          </ImagesCircularDesigns>
          <ImagesCircularDesigns src="https://picsum.photos/350/351/?blur" alt='hellow2'></ImagesCircularDesigns>
        </ImagesContainer>
      </div>
    );
  };

export const ImagesFullDesign = () => {
    return (
      <div>
        <ImagefullScreen>
          <ImagesFullDesigns src="https://picsum.photos/350/350/?blur" alt="hellow">
          </ImagesFullDesigns>
        </ImagefullScreen>
      </div>
    );
  };