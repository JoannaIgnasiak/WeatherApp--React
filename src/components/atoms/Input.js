import React from 'react';
import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';
import Icon1Sunrise from 'components/atoms/Icon1Sunrise';
import { keyframes } from 'styled-components';
import { Devices } from 'context/Devices';

const white = '#fff';

const StyledWrapper = styled.div`
  padding: 15px;
  width: 100vw;
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 8rem;

  @media ${Devices.tablet} {
    font-size: 6rem;
  }
  @media ${Devices.mobileL} {
    font-size: 3.5rem;
  }
`;

const shakeAnimation = keyframes`
    0%, 100% {transform: translateX(0);}
    10%, 30%, 50%, 70%, 90% {transform: translateX(-10px);}
    20%, 40%, 60%, 80% {transform: translateX(10px);}}
`;

const StyledInput = styled.input.attrs((props) => ({
  placeholder: 'Enter City Name',
  autocomplete: 'off',
}))`
  padding: 15px 30px;
  margin-left: 100px;
  width: 500px;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: hsl(0, 0%, 96%);
  border: none;
  border-radius: 50px;
  outline: none;
  padding: 10px 20px 10px 40px;
  font-size: 1.2rem;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  @media ${Devices.mobileL} {
    font-size: 1rem;
  }
  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
      animation-name: ${shakeAnimation};
      animation-duration: 1s;
    `}

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: hsl(0, 0%, 70%);
  }

  @media ${Devices.tablet} {
    width: 400px;
    margin-left: 40px;
  }

  @media ${Devices.mobileL} {
    width: 240px;
    margin-left: 30px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  color: red;
  opacity: 0;
  margin-top: 2px;
  margin-left: 120px;
  width: 500px;

  @media ${Devices.tablet} {
    width: 400px;
    margin-left: 40px;
  }

  @media ${Devices.mobileL} {
    width: 240px;
    margin-left: 30px;
  }

  ${({ error }) =>
    error &&
    css`
      opacity: 1;
    `}
`;

const Input = ({ handleKeyDown, mainOpen, error }) => (
  <>
    <StyledWrapper mainOpen={mainOpen}>
      <StyledInnerWrapper>
        <Icon1Sunrise color={white}></Icon1Sunrise>
        <StyledHeading>WeatherApp</StyledHeading>
      </StyledInnerWrapper>
      <StyledInput id="mainInput" onKeyDown={handleKeyDown} error={error}></StyledInput>
      <StyledParagraph error={error}>Invalid City name - please try again</StyledParagraph>
    </StyledWrapper>
  </>
);

export default Input;
