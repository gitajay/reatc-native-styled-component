/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styled from 'styled-components'; 

const Container = styled.View`
  flex: 1;
  background-color: #00003f;
  align-items: center;
  justify-content: center;
`;

const TopItem = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 22px;
  background-color: white;
  width: 300px;
  height: 300px;
`;

const ParentItem = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  flex-direction: row;
`;

const InnerItem = styled.View`
  background-color: #00003f;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
`;

const InnerText = styled.Text`
  font-size: 30px;
`;

const App: () => React$Node = () => {
  return (
    <Container>
      <TopItem>
        <ParentItem>
          <InnerItem></InnerItem>
          <InnerText>Name</InnerText>
          <InnerItem></InnerItem>
        </ParentItem>
        <ParentItem>
          <InnerText>Balance</InnerText>
        </ParentItem>
      </TopItem>
    </Container>
  );
};

export default App;
