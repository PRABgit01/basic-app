import React from "react";
import { ImagesDesign,ImagesCircularDesign,ImagesFullDesign } from "./images";

export  default{
    title : "images",
    component:ImagesDesign
}

export const ImageFirstPage=()=><ImagesDesign/>
export const ImageCircularPage=()=><ImagesCircularDesign/>
export const ImageFullPage=()=><ImagesFullDesign/>

