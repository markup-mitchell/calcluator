import React, { Component } from 'react';
import styled from 'styled-components';

const LCD = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  margin: 5px;
  height: 70px;
  background-color: #c4c4c4;
  font-size: 30px;
`;

export default class Screen extends Component {
  render() {
    return (
      <LCD>{this.props.display}</LCD>
    );
  }
}

