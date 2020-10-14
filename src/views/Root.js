import React, { Component } from 'react';
import styled from 'styled-components';
import Selection from 'components/moleculles/Selection';
import GlobalStyle from 'theme/GlobalStyle';
import Footer from 'components/atoms/Footer';
import Header from 'components/atoms/Header';
import imgLandscape from 'assets/pic/landscape.jpg';
import GetDayFunction from 'functions/getDayFunction';
import GetDateFunction from 'functions/getDateFunction';
import MainTemplate from 'templates/MainTemplate';

const Wrapper = styled.div`
  width: 100vw;
  height: ${(props) => props.height - 130 + 'px'};
  position: relative;
  background-image: url(${imgLandscape});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  touch-action: none;
`;

class Root extends Component {
  state = {
    optionsOpen: false,
    temperature: 'celsius', //celsius or kelwin or farenhti
    wind: 'km/h', //km/h  or mph
    width: null,
    height: null,
    name: null,
    mainOpen: true,
    data: null,
    error: null,
  };

  updateDimensions = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      // true for mobile device
      this.setState({ width: window.outerWidth, height: window.outerHeight });
    } else {
      // false for not mobile device
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  handleOptionOpen = () => {
    if (this.state.optionsOpen === true) {
      this.setState({ optionsOpen: false });
    } else {
      this.setState({ optionsOpen: true });
    }
  };

  handleUnitChangeTemp = (unit) => {
    this.setState({ temperature: unit });
  };

  handleUnitChangeWind = (unit) => {
    this.setState({ wind: unit });
  };

  handleBack = () => {
    this.setState({ mainOpen: true });
    document.getElementById('mainInput').value = '';
    document.getElementById('scroll').scrollLeft = 0;
  };

  handleKeyDown = (e) => {
    let cityName = e.target.value;
    this.setState({ error: false });
    if (e.key === 'Enter') {
      let newLink =
        'https://api.openweathermap.org/data/2.5/forecast?q=' +
        cityName +
        '&appid=a95b2a1ab5a464859609fdd41a0654fa';

      fetch(newLink)
        .then((res) => res.json())
        .then((res) => {
          if (res.cod === '200') {
            this.setState({ data: res });
            this.setState({ name: cityName, mainOpen: false, error: false });
            document.getElementById('mainInput').blur();
            return res;
          } else if (res.cod === '404') {
            this.setState({ error: true });
          }
        });
    }
  };

  render() {
    const state = this.state;

    let currentTime = Date.now() / 1000;
    let currentDay = GetDayFunction(currentTime, 0) + ' ' + GetDateFunction(currentTime, 0);

    return (
      <>
        <GlobalStyle />
        <Header
          optionsOpen={state.optionsOpen}
          handleOptionOpen={this.handleOptionOpen}
          currentDay={currentDay}
        ></Header>
        <Selection
          state={state}
          handleOptionOpen={this.handleOptionOpen}
          handleUnitChangeTemp={this.handleUnitChangeTemp}
          handleUnitChangeWind={this.handleUnitChangeWind}
        />
        <Wrapper width={this.state.width} height={this.state.height}>
          <MainTemplate
            state={state}
            handleKeyDown={this.handleKeyDown}
            handleBack={this.handleBack}
          />
        </Wrapper>
        <Footer height={this.state.height} />
      </>
    );
  }
}

export default Root;
