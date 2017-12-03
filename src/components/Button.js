import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  &:hover { background: #12E07D; } // move this to the container
  margin: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 60px;
  background-color: #3dba7e; 
  color: white;
  font-size: 25px;
`
  
export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.click}>{this.props.val}</StyledButton>
    );
  }
}
