import React from 'react';
import styled from 'styled-components';
import { Devices } from 'context/Devices';

const StyledSVG = styled.svg`
  width: 65px;
  height: 65px;
  right: 25px;
  top: 25px;

  @media ${Devices.mobileM} {
    width: 45px;
    height: 45px;
  }
`;

const Icon1Sunrise = ({ color }) => (
  <StyledSVG x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={`${color}`}
      d="M177.615,288c7.438-36.521,39.688-64,78.396-64
			c38.709,0,70.958,27.479,78.376,64h32c-7.834-54.125-54.084-96-110.376-96c-56.271,0-102.541,41.875-110.375,96H177.615z
			 M256.011,160c8.833,0,16-7.167,16-16v-32c0-8.833-7.167-16-16-16c-8.832,0-16,7.167-16,16v32
			C240.011,152.833,247.179,160,256.011,160z M403.073,156.917c-6.249-6.25-16.374-6.25-22.625,0l-22.625,22.625
			c-6.249,6.25-6.249,16.375,0,22.625c6.251,6.25,16.376,6.25,22.625,0l22.625-22.625
			C409.323,173.292,409.323,163.167,403.073,156.917z M154.177,179.542l-22.625-22.625c-6.249-6.25-16.373-6.25-22.625,0
			c-6.249,6.25-6.249,16.375,0,22.625l22.625,22.625c6.252,6.25,16.376,6.25,22.625,0
			C160.429,195.917,160.429,185.792,154.177,179.542z M352.011,320h-192c-8.832,0-16,7.167-16,16s7.168,16,16,16h192
			c8.833,0,16-7.167,16-16S360.844,320,352.011,320z M320.011,384h-128c-8.832,0-16,7.167-16,16s7.168,16,16,16h128
			c8.833,0,16-7.167,16-16S328.844,384,320.011,384z"
    />
  </StyledSVG>
);

export default Icon1Sunrise;
