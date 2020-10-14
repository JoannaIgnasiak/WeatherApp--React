import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import GetTempUnit from 'functions/getTempUnit';
import GetDateFunction from 'functions/getDateFunction';
import GetTimeFunction from 'functions/getTimeFunction';
import GetWindDirectionFuncton from 'functions/getWindDirectionFuncton';
import GetWindSpeedFuncton from 'functions/getWindSpeedFunction';
import WeatherIcon from 'components/atoms/WeatherIcon';
import { Devices } from 'context/Devices';

const Wrapper = styled.div`
  width: 100vw;
  padding: 5px 20px;
  height: ${(props) => (props.height - 130) * 0.15 + 'px'};
  background-color: #c7d6ea;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${Devices.mobileM} {
    padding: 5px 10px;
    flex-direction: column;
    height: ${(props) => (props.height - 130) * 0.3 + 'px'};
  }

  @media ${Devices.tablet} {
    flex-direction: column;
    padding: 2px 10vw;
    height: ${(props) => (props.height - 130) * 0.25 + 'px'};
  }

  @media ${Devices.mobileL} {
    padding: 5px 10px;
  }

  @media ${Devices.MobileS} {
    padding: 5px 0;
  }
`;

const WrapperSecondary = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${Devices.desktop} {
    justify-content: space-around;
  }
  @media ${Devices.mobileM} {
    width: 90%;
  }

  @media ${Devices.tablet} {
    width: 80%;
    justify-content: space-around;
  }

  @media ${Devices.mobileL} {
    ${({ wind }) =>
      wind &&
      css`
        width: 100%;
        justify-content: space-around;
      `}
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  width: max-content;
  align-items: center;

  ${({ upper }) =>
    upper &&
    css`
      margin: 0;
      justify-content: space-between;
    `}

  ${({ wind }) =>
    wind &&
    css`
        margin: 0 0 0 5px;
        @media ${Devices.mobileM} {
    margin: 0 0 0 3px;}
        @media ${Devices.mobileS} {
        margin: 0 0 0 3px;
      `}
`;

const StyledDescription = styled.p`
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 2rem;

  ${({ windspeed }) =>
    windspeed &&
    css`
      text-transform: lowercase;
    `}

  @media ${Devices.mobileM} {
    margin: 2px 0 2px 5px;

    font-size: 1.4rem;
    max-width: 60px;
  }
`;

const StyledNumber = styled.h2`
  width: max-content;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  align-self: center;

  @media ${Devices.mobileM} {
    font-size: 1.4rem;
    margin: 0;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Banner extends Component {
  render() {
    const state = this.props.state;
    const temperature = GetTempUnit(
      this.props.state.data.list[0].main.temp,
      this.props.state.temperature,
    );

    const x = new Date();
    const currentTimeGMT = Date.now() / 1000 + x.getTimezoneOffset() * 60;

    const date1 = GetDateFunction(currentTimeGMT, this.props.state.data.city.timezone);
    const hour = GetTimeFunction(currentTimeGMT, this.props.state.data.city.timezone);
    const date2 = 'Local Time: ' + hour;

    const windDirection = GetWindDirectionFuncton(this.props.state.data.list[0].wind.deg);
    const windSpeed = GetWindSpeedFuncton(
      this.props.state.data.list[0].wind.speed,
      this.props.state.wind,
    );

    return (
      <>
        <Wrapper height={state.height}>
          <WrapperSecondary>
            <StyledNumber>{temperature} </StyledNumber>

            <InnerWrapper upper>
              <WeatherIcon
                hour={hour}
                timesunrise={this.props.timesunrise}
                timesunset={this.props.timesunset}
                icon={this.props.state.data.list[0].weather[0].id}
              />

              <StyledDescription>
                {this.props.state.data.list[0].weather[0].description}
              </StyledDescription>
            </InnerWrapper>
          </WrapperSecondary>
          <WrapperSecondary wind>
            <InnerWrapper wind>
              <InnerWrapper>
                <WeatherIcon icon={'windDirection'} />
                <StyledDescription>{windDirection}</StyledDescription>
              </InnerWrapper>
              <InnerWrapper wind>
                <WeatherIcon icon={'windSpeed'} />
                <StyledDescription windspeed>{windSpeed}</StyledDescription>
              </InnerWrapper>
            </InnerWrapper>

            <StyledWrapper>
              <StyledNumber>{date1}</StyledNumber>
              <StyledNumber>{date2}</StyledNumber>
            </StyledWrapper>
          </WrapperSecondary>
        </Wrapper>
      </>
    );
  }
}

export default Banner;
