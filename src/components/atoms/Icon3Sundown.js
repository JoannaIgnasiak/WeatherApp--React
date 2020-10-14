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

const Icon2Sundown = ({ color }) => (
  <StyledSVG x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill={`${color}`}
      d="M64,319.001h384c8.833,0,16-7.167,16-16s-7.167-16-16-16H64c-8.833,0-16,7.167-16,16
			S55.167,319.001,64,319.001z M448,351.001H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h384c8.833,0,16-7.167,16-16
			S456.833,351.001,448,351.001z M448,415.001H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h384c8.833,0,16-7.167,16-16
			S456.833,415.001,448,415.001z M205.042,255c-0.333-0.333-0.751-0.542-1.083-0.875c-37.438-37.438-37.438-98.334,0-135.792
			c2.562-2.542,5.27-4.958,8.146-7.208c-2.251,35.958,10.729,71.375,37.104,97.729c26.374,26.396,61.79,39.333,97.749,37.083
			c-2.667,3.396-5.874,6.125-8.896,9.062h41.521c5.042-8.042,9.25-16.75,12.583-26.063c2.021-5.854,0.542-12.333-3.833-16.667
			c-4.291-4.354-10.792-5.854-16.624-3.791c-35.376,12.499-73.646,3.979-99.875-22.25c-26.251-26.25-34.792-64.521-22.251-99.896
			c2.083-5.812,0.583-12.271-3.791-16.646c-4.334-4.354-10.813-5.833-16.625-3.771c-18.521,6.542-34.625,16.604-47.833,29.792
			C138.125,138.917,132.479,205.479,164.062,255H205.042z"
    />
  </StyledSVG>
);

export default Icon2Sundown;