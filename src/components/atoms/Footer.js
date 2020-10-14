import React from 'react';
import styled from 'styled-components';
import { Devices } from 'context/Devices';

const StyledFooter = styled.footer`
  width: 100vw;
  height: 50px;
  background-color: #333c43;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: hsl(0, 0%, 70%);
  transition: 0.5s;
  text-decoration: none;

  @media ${Devices.mobileM} {
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = ({ height }) => (
  <>
    <StyledFooter height={height}>
      <StyledLink href="https://www.linkedin.com/in/joanna-ignasiak/">
        Created by Joanna Ignasiak 2020
      </StyledLink>
    </StyledFooter>
  </>
);

export default Footer;
