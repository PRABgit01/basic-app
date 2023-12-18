import React from 'react';
import { CircleAvatar, IconBadge } from './badgesStyled'; 

const Badges = () => {
  return (
    <div>
      <CircleAvatar>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular sm"
            src="https://i.pravatar.cc/43"
            alt="avatar1"
          />
          <div className="status-badge online-green"></div>
        </div>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular md"
            src="https://i.pravatar.cc/44"
            alt="avatar2"
          />
          <div className="status-badge online-yellow"></div>
        </div>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular lg"
            src="https://i.pravatar.cc/45"
            alt="avatar3"
          />
          <div className="status-badge online-red"></div>
        </div>
      </CircleAvatar>
    </div>
  );
};

export default Badges;

export const Iconbadges = () => {
  return (
    <div>
      <IconBadge>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular sm"
            src="https://adorn-components.netlify.app/assets/images/cart.svg"
            alt="avatar1"
          />
          <div className="icon-badge">10</div>
        </div>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular md"
            src="https://adorn-components.netlify.app/assets/images/cart.svg"
            alt="avatar2"
          />
          <div className="icon-badge">12</div>
        </div>
        <div className="avatar-container">
          <img
            className="avatar avatar-circular lg"
            src="https://adorn-components.netlify.app/assets/images/cart.svg"
            alt="avatar3"
          />
          <div className="icon-badge">15</div>
        </div>
      </IconBadge>
    </div>
  );
};