import React, { Component } from 'react';
import styled from 'styled-components';
import GetDayFunction from 'functions/getDayFunction';
import HourForecast from 'components/atoms/HourForecast';
import GetTempUnit from 'functions/getTempUnit';
import GetTimeFunction from 'functions/getTimeFunction';
import { Devices } from 'context/Devices';

const StyledWrapper = styled.div`
  padding: 5px 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: pan-x;
  margin: 0 25px;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  @media ${Devices.mobileM} {
    padding: 1px 10px;
    margin: 0 15px;
  }
`;

const StyledColumnWrapper = styled.div`
  padding: 5px 25px;
  width: max-content;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${Devices.mobileM} {
    width: max-content;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 10%;
    right: 0;
    width: 2px;
    border-radius: 50%;
    height: 80%;
    background-color: white;
  }
`;

const StyledRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: max-content;
`;

const StyledDay = styled.h3`
  text-align: center;
  margin: 5px 0 10px 0;

  @media ${Devices.mobileM} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

class WeatherBar extends Component {
  render() {
    const data = this.props.state.data.list;
    const unit = this.props.state.temperature;
    const timesunrise = this.props.timesunrise;
    const timesunset = this.props.timesunset;
    const timezone = this.props.state.data.city.timezone;

    const x = new Date();

    var activeDayItem = null;
    const days = data.map(function (item) {
      const myoffset = x.getTimezoneOffset() * 60; ///in seconds
      const totalOffSet = myoffset + timezone; //in seconds
      var nowTime = item.dt + totalOffSet;
      var dayItem = GetDayFunction(nowTime, myoffset);

      if (activeDayItem !== dayItem) {
        activeDayItem = dayItem;

        var items = data.map(function (temp) {
          var nowTime = temp.dt + totalOffSet;
          var dayItemTime = GetDayFunction(nowTime, myoffset);

          if (activeDayItem === dayItemTime) {
            var hour = GetTimeFunction(nowTime, myoffset);
            var temperature = GetTempUnit(temp.main.temp, unit);
            var icon = temp.weather[0].id;

            return (
              <HourForecast
                icon={icon}
                hour={hour}
                timesunrise={timesunrise}
                timesunset={timesunset}
                temperature={temperature}
              />
            );
          }
        });

        return (
          <>
            <StyledColumnWrapper>
              <StyledDay>{dayItem}</StyledDay>
              <StyledRowWrapper>{items}</StyledRowWrapper>
            </StyledColumnWrapper>
          </>
        );
      }
    });

    return (
      <>
        <StyledWrapper id="scroll">{days}</StyledWrapper>
      </>
    );
  }
}

export default WeatherBar;
