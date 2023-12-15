import styled from 'styled-components';

export const CircleAvatar = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--active-color);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 50px;

  .avatar-container {
    position: relative;
  }

  .avatar-circular {
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar-circular::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px; 
    height: 6px; 
    background-color: #ff4e54; 
    border-radius: 50%;
  }

  .status-badge.online-green {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #4caf50; 
    border: 2px solid #ffffff; 
  }

  .status-badge.online-yellow {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ffc107; 
    border: 2px solid #ffffff; 
  }

  .status-badge.online-red {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red; 
    border: 2px solid #ffffff; 
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
  }
`;

export const IconBadge = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--active-color);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 50px;

  .avatar-container {
    position: relative;
  }

  .avatar-circular {
    position: relative;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
  }

  .avatar-circular::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: #ff4e54;
    border-radius: 50%;
  }

  .status-badge.online-red {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    border: 2px solid #ffffff;
  }

  .icon-badge {
    position: absolute;
    top: -1px;
    right: -1px;
    background-color: #ff4e54;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
  }
`;