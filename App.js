/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './src/navigation/Stcks';

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </>
    );
  }
}
