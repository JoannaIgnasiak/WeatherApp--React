import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcon from 'components/atoms/WeatherIcon';
import { Devices } from 'context/Devices';

const StyledWrapper = styled.div`
  width: max-content;
  height: 150px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${Devices.mobileM} {
    height: 100px;
    padding: 0;
  }
`;
const StyledTime = styled.h4`
  margin: 0;
  padding: 10px;
  width: 80px;
  text-align: center;
  color: #fff;
  font-weight: 600;

  @media ${Devices.mobileM} {
    font-size: 1.1rem;
    padding: 5px;
  }
`;
class HourForecast extends Component {
  render() {
    return (
      <>
        <StyledWrapper>
          <StyledTime>{this.props.hour}</StyledTime>

          <WeatherIcon
            icon={this.props.icon}
            hour={this.props.hour}
            timesunrise={this.props.timesunrise}
            timesunset={this.props.timesunset}
          />
          <StyledTime>{this.props.temperature}</StyledTime>
        </StyledWrapper>
      </>
    );
  }
}

export default HourForecast;
