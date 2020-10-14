import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Details from 'components/organisms/Details';

const StyledWrapper = styled.div`
  width: 200vw;
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  transform: translateX(${({ mainOpen }) => (mainOpen ? '0' : '-100vw')});
  transition: transform 0.7s ease-in-out;
`;

const StyledDiv = styled.div``;

const StyledDetails = styled(Details)`
  width: 100vw;
`;
class MainTemplate extends Component {
  render() {
    return (
      <>
        <StyledWrapper mainOpen={this.props.state.mainOpen}>
          <Input
            handleKeyDown={this.props.handleKeyDown}
            mainOpen={this.props.state.mainOpen}
            error={this.props.state.error}
          />
          <StyledDiv>
            {this.props.state.data && (
              <StyledDetails handleBack={this.props.handleBack} state={this.props.state} />
            )}
          </StyledDiv>
        </StyledWrapper>
      </>
    );
  }
}

export default MainTemplate;
