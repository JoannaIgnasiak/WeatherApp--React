import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import IconSun from 'assets/icons/800sun.svg';
import IconMoon from 'assets/icons/800moon.svg';
import IconStorm from 'assets/icons/2xxstorm.svg';
import IconDrizzle from 'assets/icons/3xxdrizzle.svg';
import IconRain from 'assets/icons/5xxrain.svg';
import IconSnow from 'assets/icons/5116xxfreezingrain.svg';
import IconMist from 'assets/icons/7xxmist.svg';
import Icon801Sun from 'assets/icons/801sun.svg';
import Icon801Moon from 'assets/icons/801moon.svg';
import IconClouds from 'assets/icons/802clouds.svg';
import IconLotofClouds from 'assets/icons/803lotofclouds.svg';
import IconWindDirection from 'assets/icons/winddirection.svg';
import IconWindSpeed from 'assets/icons/Icon2Wind.svg';

const StyledIcon = styled.div`
  width: 45px;
  height: 45px;

  ${({ icon }) =>
    (icon === 200 ||
      icon === 201 ||
      icon === 202 ||
      icon === 210 ||
      icon === 211 ||
      icon === 212 ||
      icon === 221 ||
      icon === 230 ||
      icon === 231 ||
      icon === 232) &&
    css`
      background: transparent url(${IconStorm}) no-repeat;
      background-size: contain;
    `}

  ${({ icon }) =>
    (icon === 300 ||
      icon === 301 ||
      icon === 302 ||
      icon === 310 ||
      icon === 311 ||
      icon === 312 ||
      icon === 313 ||
      icon === 314 ||
      icon === 321) &&
    css`
      background: transparent url(${IconDrizzle}) no-repeat;
      background-size: contain;
    `}


    ${({ icon }) =>
    (icon === 500 ||
      icon === 501 ||
      icon === 502 ||
      icon === 503 ||
      icon === 504 ||
      icon === 520 ||
      icon === 521 ||
      icon === 522 ||
      icon === 531) &&
    css`
      background: transparent url(${IconRain}) no-repeat;
      background-size: contain;
    `}


    ${({ icon }) =>
    (icon === 600 ||
      icon === 601 ||
      icon === 602 ||
      icon === 611 ||
      icon === 612 ||
      icon === 613 ||
      icon === 615 ||
      icon === 616 ||
      icon === 620 ||
      icon === 621 ||
      icon === 622 ||
      icon === 511) &&
    css`
      background: transparent url(${IconSnow}) no-repeat;
      background-size: contain;
    `}
    
    ${({ icon }) =>
    (icon === 701 ||
      icon === 711 ||
      icon === 721 ||
      icon === 731 ||
      icon === 741 ||
      icon === 751 ||
      icon === 761 ||
      icon === 762 ||
      icon === 771 ||
      icon === 781) &&
    css`
      background: transparent url(${IconMist}) no-repeat;
      background-size: contain;
    `}



  ${({ icon, moon }) =>
    icon === 800 &&
    moon === false &&
    css`
      background: transparent url(${IconSun}) no-repeat;
      background-size: contain;
    `}

    ${({ icon, moon }) =>
    icon === 800 &&
    moon === true &&
    css`
      background: transparent url(${IconMoon}) no-repeat;
      background-size: contain;
    `}

    ${({ icon, moon }) =>
    icon === 801 &&
    moon === false &&
    css`
      background: transparent url(${Icon801Sun}) no-repeat;
      background-size: contain;
    `}

    ${({ icon, moon }) =>
    icon === 801 &&
    moon === true &&
    css`
      background: transparent url(${Icon801Moon}) no-repeat;
      background-size: contain;
    `}


    ${({ icon }) =>
    icon === 802 &&
    css`
      background: transparent url(${IconClouds}) no-repeat;
      background-size: contain;
    `}

    ${({ icon }) =>
    (icon === 803 || icon === 804) &&
    css`
      background: transparent url(${IconLotofClouds}) no-repeat;
      background-size: contain;
    `}

    ${({ icon }) =>
    icon === 'windDirection' &&
    css`
      width: 35px;
      height: 35px;
      background: transparent url(${IconWindDirection}) no-repeat;
      background-size: contain;
    `}

    ${({ icon }) =>
    icon === 'windSpeed' &&
    css`
      width: 35px;
      height: 35px;
      margin-left: 8px;
      background: transparent url(${IconWindSpeed}) no-repeat;
      background-size: contain;
    `}
`;

class WeatherIcon extends Component {
  getMyHour = (hour, timesunrise, timesunset) => {
    if (hour && timesunrise && timesunset) {
      const myHour = parseInt(hour.substr(0, hour.indexOf(':')));
      const rise = parseInt(timesunrise.substr(0, timesunrise.indexOf(':')));
      const set = parseInt(timesunset.substr(0, timesunset.indexOf(':')));

      if (myHour <= rise || myHour >= set) {
        return true;
      } else {
        return false;
      }
    }
  };

  render() {
    const icon = this.props.icon;
    const hour = this.props.hour;
    const timesunrise = this.props.timesunrise;
    const timesunset = this.props.timesunset;
    let moon = this.getMyHour(hour, timesunrise, timesunset);

    return (
      <>
        <StyledIcon icon={icon} moon={moon} />
      </>
    );
  }
}

export default WeatherIcon;
