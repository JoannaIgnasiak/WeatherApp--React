import React, { Component } from 'react';
import ButtonSlider from 'components/atoms/ButtonSlider';
import styled from 'styled-components';
import imgSky from 'assets/pic/sky.jpg';
import { Devices } from 'context/Devices';

const StyledWrapper = styled.div`
  width: 80vw;
  height: ${(props) => props.height - 200 + 'px'};
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  right: 10vw;
  background-image: url(${imgSky});
  background-size: 100% 100%;
  z-index: 10;
  background-repeat: no-repeat;
  transform: translateX(${({ optionsOpen }) => (optionsOpen ? '0' : '100vw')});
  transition: transform 0.5s ease-in-out;
`;

const StyledCategory = styled.h2`
  color: #fff;
  @media ${Devices.mobileM} {
    font-size: 1.5rem;
  }
`;

const StyledSubCategory = styled.h3`
  color: #fff;

  @media ${Devices.mobileM} {
    font-size: 1.2rem;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${Devices.mobileM} {
    width: 180px;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 26px;
  border-radius: 15px;
  margin-top: 40px;
  border: none;
  outline: none;
  background: #0e5580;
  cursor: pointer;
  color: white;
  letter-spacing: 1.5px;
`;

class Selection extends Component {
  render() {
    const optionsOpen = this.props.state.optionsOpen;
    const handleUnitChangeTemp = this.props.handleUnitChangeTemp;
    const handleUnitChangeWind = this.props.handleUnitChangeWind;
    const handleOptionOpen = this.props.handleOptionOpen;

    return (
      <>
        <StyledWrapper optionsOpen={optionsOpen} height={this.props.state.height}>
          <StyledCategory>Temperature</StyledCategory>
          <StyledInnerWrapper>
            <StyledSubCategory>Celsius</StyledSubCategory>
            <ButtonSlider
              unit={'celsius'}
              handleUnitChange={handleUnitChangeTemp}
              activeUnit={this.props.state.temperature}
            ></ButtonSlider>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <StyledSubCategory>Kelwin</StyledSubCategory>
            <ButtonSlider
              unit={'kelwin'}
              handleUnitChange={handleUnitChangeTemp}
              activeUnit={this.props.state.temperature}
            ></ButtonSlider>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <StyledSubCategory>Farenheit</StyledSubCategory>
            <ButtonSlider
              unit={'farenheit'}
              handleUnitChange={handleUnitChangeTemp}
              activeUnit={this.props.state.temperature}
            ></ButtonSlider>
          </StyledInnerWrapper>
          <StyledCategory>Wind</StyledCategory>
          <StyledInnerWrapper>
            <StyledSubCategory>km/h</StyledSubCategory>
            <ButtonSlider
              unit={'km/h'}
              handleUnitChange={handleUnitChangeWind}
              activeUnit={this.props.state.wind}
            ></ButtonSlider>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <StyledSubCategory>mph</StyledSubCategory>
            <ButtonSlider
              unit={'mph'}
              handleUnitChange={handleUnitChangeWind}
              activeUnit={this.props.state.wind}
            ></ButtonSlider>
          </StyledInnerWrapper>
          <StyledButton onClick={handleOptionOpen}>OK</StyledButton>
        </StyledWrapper>
      </>
    );
  }
}

export default Selection;
