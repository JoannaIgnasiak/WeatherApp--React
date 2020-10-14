import React from 'react';
import styled from 'styled-components';
import Icon0Settings from 'components/atoms/Icon0Settings';
import { Devices } from 'context/Devices';

const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  background-color: #c7d6ea;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 80px;
  justify-items: center;
  align-items: center;
  align-content: center;

  @media ${Devices.mobileM} {
    grid-template-columns: 80% 20%;
  }
`;
const StyledParagraph = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  margin-left: 10%;
  align-self: center;
  justify-self: center;
  @media ${Devices.mobileM} {
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

const Header = ({ optionsOpen, handleOptionOpen, currentDay }) => (
  <>
    <StyledHeader>
      <StyledParagraph>{currentDay}</StyledParagraph>
      <Icon0Settings optionsOpen={optionsOpen} handleOptionOpen={handleOptionOpen} />
    </StyledHeader>
  </>
);

export default Header;
