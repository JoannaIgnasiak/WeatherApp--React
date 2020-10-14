import React from 'react';
import styled from 'styled-components';
import { Devices } from 'context/Devices';

const StyledSVG = styled.svg`
  width: 65px;
  height: 65px;
  /* position: absolute; */
  margin: 10px;
  top: 5px;
  left: 5px;
  cursor: pointer;

  @media ${Devices.mobileM} {
    width: 45px;
    height: 45px;
  }
`;

const Icon01ArrowBack = ({ color, handleBack }) => (
  <StyledSVG onClick={handleBack} x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={`${color}`}
      d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
		c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={`${color}`}
      d="M325,250.438C282.797,223.078,215.5,224,215.5,224v-48l-96,80l96,64v-48c0,0,45-9,85.844,6.406
      C338.688,292.484,379.75,336,379.75,336S367.203,277.828,325,250.438z"
    />
  </StyledSVG>
);

export default Icon01ArrowBack;
