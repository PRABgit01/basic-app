import React from "react";
import {
  CardBasic,
  CardContainer,
  CardTitle,
  CardContent,
  CardBadgess,
  ImagesBadge,
  SmallLogo,
  PrimaryOutl,
  CrossLogo,
  OutOffStocks,
  HozizonatalBadgess,
  HorizontalBadgeimages,
  PrimaryoutHorizonatl
} from "./cards.style";

export const Cards = () => {
  return (
    <div>
      <CardContainer>
        <div>
          <CardBasic>
            <CardTitle>Eren Yeager</CardTitle>
            <CardContent>
              Eren Yeager was a former member of the Survey Corps. He was the
              main protagonist of Attack on Titan. He lived in Shiganshina
              District,
            </CardContent>
          </CardBasic>
        </div>
      </CardContainer>
    </div>
  );
};

export const CardBadge = () => {
  return (
    <div>
      <CardContainer>
        <div>
          <SmallLogo>The training</SmallLogo>
          <CardBadgess>
            <ImagesBadge
              src="https://picsum.photos/300/200/?blur"
              alt="product-image"
            ></ImagesBadge>
            <CardTitle>Survey Corps</CardTitle>
            <CardContent>
              EIn the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined
              the 104th Training Corps. The three graduated with Eren ranking
              5th best, and they joined the Survey Corps following the battle of
              Trost District
            </CardContent>
          </CardBadgess>
        </div>
      </CardContainer>
    </div>
  );
};

export const CardDissmissBadge = () => {
  return (
    <div>
      <CardContainer>
        <div>
          <CrossLogo>X</CrossLogo>
          <CardBadgess>
            <ImagesBadge
              src="https://picsum.photos/300/200/?blur"
              alt="product-image"
            ></ImagesBadge>
            <CardTitle>Survey Corps Story</CardTitle>
            <p>Rs. 250</p>
            <PrimaryOutl>CHECKOUT </PrimaryOutl>
          </CardBadgess>
        </div>
      </CardContainer>
    </div>
  );
};

export const CardOutoffStock = () => {
  return (
    <div>
      <CardContainer>
        <div>
          <CrossLogo>X</CrossLogo>
          <OutOffStocks>OUT OF STOCK</OutOffStocks>
          <CardBadgess>
            <ImagesBadge
              src="https://picsum.photos/300/200/?blur"
              alt="product-image"
            ></ImagesBadge>

            <CardTitle>Survey Corps Story</CardTitle>
            <p>Rs. 250</p>
            <PrimaryOutl>CHECKOUT </PrimaryOutl>
          </CardBadgess>
        </div>
      </CardContainer>
    </div>
  );
};

export const HorozonatalCard = () => {
  return (
    <div>
      <CardContainer>
        <HozizonatalBadgess>
          <HorizontalBadgeimages
            src="https://picsum.photos/300/200/?blur"
            alt="product-image"
          ></HorizontalBadgeimages>
          <div>
            <CardTitle>Founding Titan</CardTitle>
            <CardContent>
              Despite having the ability to control the Titans, no Founding
              Titan of royal blood after the Great Titan War expressed any
              desire to get rid of the Titans outside the Walls, even if the
              inheritor had expressed that desire previously
            </CardContent>
          <PrimaryoutHorizonatl>READ MORE </PrimaryoutHorizonatl>

          </div>

        </HozizonatalBadgess>
      </CardContainer>
    </div>
  );
};
