import React from 'react';
import styled, { css } from 'styled-components';

const StyledSVG = styled.svg`
  width: 86px;
  height: 86px;
  right: 25px;
  top: 25px;
`;

const Icon2Wind = ({ color }) => (
  <StyledSVG x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill={`${color}`}
      d="M431,192c-26.5,0-48,21.5-48,48c0,5.646,1.167,10.958,2.938,16H79c-8.833,0-16,7.167-16,16s7.167,16,16,16
			h352c26.5,0,48-21.5,48-48S457.5,192,431,192z M79,224h192c26.5,0,48-21.5,48-48s-21.5-48-48-48s-48,21.5-48,48
			c0,5.646,1.167,10.958,2.938,16H79c-8.833,0-16,7.167-16,16S70.167,224,79,224z M335,320c-0.938,0-1.834,0.208-2.791,0.291
			c-0.625-0.041-1.146-0.291-1.771-0.291H83.584C72.209,320,63,327.167,63,336s9.209,16,20.584,16h206.354
			c-1.771,5.042-2.938,10.376-2.938,16c0,26.5,21.5,48,48,48s48-21.5,48-48S361.5,320,335,320z"
    />
  </StyledSVG>
);

export default Icon2Wind;
