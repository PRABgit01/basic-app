import React from 'react';


import { StyledButton } from '../badges/badgesStyled';
const Badges = () => {
  return (
    <div>
      <button>Hello</button>
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br></br>
      </div>
      <StyledButton variant='outline' >Styled Button</StyledButton>

    </div>
  );
};
export default Badges;