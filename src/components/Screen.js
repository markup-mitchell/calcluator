import React, { Component } from 'react';
import styled from 'styled-components';

const LCD = styled.div`
  width: 306px;
  margin: 5px;
  height: 70px;
  background-color: #c4c4c4;
`;

export default class Screen extends Component {
  render() {
    return (
      <LCD />
    );
  }
}

