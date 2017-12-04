import React, { Component } from 'react';
import styled from 'styled-components';
import Screen from './Screen.js';
import KeyBoard from './KeyBoard.js';

const StyledContainer = styled.div`
  // &:hover { background: #12E07D; } // move this to the container
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white; 
  width: 320px;
`
  
export default class Housing extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      lastDigit: null,
      lastOperator: null,
      calculation: null,
    }
    this.clearScreen = this.clearScreen.bind(this);
    this.enterDigit = this.enterDigit.bind(this);
  }

  clearScreen() {
    this.setState( {display: '0'} )
  }

  enterDigit(digit) {
    this.setState( prevState => ({ display: prevState.display.concat(digit) }))
  } 


  render() {
    return (
      <StyledContainer>
       <Screen display={this.state.display} />
       <KeyBoard clear={this.clearScreen} enterDigit={this.enterDigit} />
       <button onClick={this.enterDigit}>click</button>
      </ StyledContainer>
    );
  }
}
