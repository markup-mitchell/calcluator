import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.js';

const StyledContainer = styled.div`
  // &:hover { background: #12E07D; } // move this to the container
  display: flex;
  flex-wrap: wrap;
  background-color: white; 
  width: 315px;
`
  
export default class KeyBoard extends Component {
  render(props) {
    return (
      <StyledContainer >
        <Button val='7' click={this.props.enterDigit.bind(this, '7')} />
        <Button val='8' click={this.props.enterDigit.bind(this, '8')} />
        <Button val='9' click={this.props.enterDigit.bind(this, '9')} />
        <Button val='/' />
        <Button val='4' click={this.props.enterDigit.bind(this, '4')} />
        <Button val='5' click={this.props.enterDigit.bind(this, '5')} />
        <Button val='6' click={this.props.enterDigit.bind(this, '6')} />
        <Button val='x' />
        <Button val='1' click={this.props.enterDigit.bind(this, '1')} />
        <Button val='2' click={this.props.enterDigit.bind(this, '2')} />
        <Button val='3' click={this.props.enterDigit.bind(this, '3')} />
        <Button val='-' />
        <Button val='C' click={this.props.clear} />
        <Button val='0' />
        <Button val='.' />
        <Button val='+' />
      </ StyledContainer>
    );
  }
}
