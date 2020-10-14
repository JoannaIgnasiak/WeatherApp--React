import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Icon01ArrowBack from 'components/atoms/Icon01ArrowBack';
import SunriseTime from 'components/atoms/SunriseTime';
import GetTimeFunction from 'functions/getTimeFunction';
import Banner from 'components/atoms/Banner';
import WeatherBar from 'components/organisms/WeatherBar';
import { Devices } from 'context/Devices';

const StyledWrapper = styled.div`
  width: 100vw;
  position: relative;
  height: ${(props) => props.height - 130 + 'px'};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledName = styled.h1`
  font-size: 8rem;
  text-align: center;
  height: ${(props) => (props.height - 130) * 0.45 + 'px'};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ height }) =>
    height <= 570 &&
    css`
    font-size: 3.5rem;
    height: 100px;
    };
    `}

  @media ${Devices.mobileM} {
    font-size: 3.5rem;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100vw;
  height: ${(props) => props.height * 0.4 + 'px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInnerWrapper2 = styled.div`
  width: 100vw;
  background-color: #333c43;
  height: ${(props) => props.height * 0.4 * 0.9 + 'px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledRowWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height * 0.15 + 'px'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;

  @media ${Devices.mobileM} {
    padding: 5px;
  }
`;

class Details extends Component {
  render() {
    const state = this.props.state;

    const x = new Date();
    const timesunriseGTM = this.props.state.data.city.sunrise + x.getTimezoneOffset() * 60;
    const timesunsetGTM = this.props.state.data.city.sunset + x.getTimezoneOffset() * 60;

    const timesunrise = GetTimeFunction(timesunriseGTM, this.props.state.data.city.timezone);
    const timesunset = GetTimeFunction(timesunsetGTM, this.props.state.data.city.timezone);

    return (
      <>
        <StyledWrapper height={state.height}>
          <StyledRowWrapper height={state.height}>
            <Icon01ArrowBack handleBack={this.props.handleBack} color={'white'}></Icon01ArrowBack>
            <SunriseTime timesunrise={timesunrise} timesunset={timesunset}></SunriseTime>
          </StyledRowWrapper>
          <StyledName height={state.height}>{this.props.state.data.city.name}</StyledName>
          <StyledInnerWrapper height={state.height}>
            <Banner state={state} timesunrise={timesunrise} timesunset={timesunset}></Banner>
            <StyledInnerWrapper2 height={state.height}>
              <WeatherBar state={state} timesunrise={timesunrise} timesunset={timesunset} />
            </StyledInnerWrapper2>
          </StyledInnerWrapper>
        </StyledWrapper>
      </>
    );
  }
}

export default Details;
