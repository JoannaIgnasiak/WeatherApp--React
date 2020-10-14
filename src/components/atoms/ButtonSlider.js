import React from 'react';
import styled, { css } from 'styled-components';

const StyledButtonWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  opacity: 1;
  width: 47px;
  height: 26px;
  border-radius: 15px;
  border: none;
  outline: none;
  background: #bebebe;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #0e5580;

      &::after {
        content: '';
        display: block;
        transform: translatex(23px);
      }
    `}
`;

const ButtonSlider = ({ unit, handleUnitChange, activeUnit }) => {
  return (
    <div>
      <StyledButtonWrapper>
        {unit === activeUnit ? (
          <StyledButton onClick={() => handleUnitChange(unit)} active />
        ) : (
          <StyledButton onClick={() => handleUnitChange(unit)} />
        )}
      </StyledButtonWrapper>
    </div>
  );
};

export default ButtonSlider;
