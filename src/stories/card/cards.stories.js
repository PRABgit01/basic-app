import React from "react";
import { CardBadge, CardDissmissBadge, Cards,CardOutoffStock, HorozonatalCard } from "./cards";

export default{
    title:"Cards",
    component:Cards
}

export const CardsFirst=()=><Cards/>
export const CardsWithBadge=()=><CardBadge />
export const CardsDissmiss=()=><CardDissmissBadge />
export const OutOffStock =()=><CardOutoffStock/>
export const HorozonatalCardPage =()=><HorozonatalCard/>


