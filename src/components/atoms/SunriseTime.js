import React from 'react';
import styled from 'styled-components';
import Icon1Sunrise from 'components/atoms/Icon1Sunrise';
import Icon3Sundown from 'components/atoms/Icon3Sundown';
import { Devices } from 'context/Devices';

const white = '#fff';

const StyledWrapper = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${Devices.tablet} {
    flex-direction: column;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${Devices.mobileM} {
    width: max-content;
  }
`;

const StyledTime = styled.h2`
  margin: 0;
  padding: 0;
  width: 80px;
  text-align: center;
  color: #fff;
  font-weight: 600;

  @media ${Devices.mobileM} {
    font-size: 1.2rem;
    width: 40px;
  }
`;

const SunriseTime = ({ timesunrise, timesunset }) => (
  <>
    <StyledWrapper>
      <StyledInnerWrapper>
        <Icon1Sunrise color={white} />
        <StyledTime>{timesunrise}</StyledTime>
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <Icon3Sundown color={white} />
        <StyledTime>{timesunset}</StyledTime>
      </StyledInnerWrapper>
    </StyledWrapper>
  </>
);

export default SunriseTime;
