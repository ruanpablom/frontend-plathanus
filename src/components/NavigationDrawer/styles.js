import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background: #070a57;
  left: ${props => props.isOpen ? '0px' : '-280px'};
  width: 260px;
  height: 100vh;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: left 0.5s ease-in-out;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const MenuItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;

  a{
    color: #00db7d;
    font-size: 1.2rem;
    text-decoration: none;
  }

  & + li{
    margin-top: 20px;
  }
`;

export const Close = styled(MdClose).attrs(props => ({
  size: 24,
  color: "#00db7d",
}))`
  margin: 1rem;
`;
