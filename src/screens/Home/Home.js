import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacks2 from '../../navigation/stacks2';

export default class Home extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 50}}>Home</Text>
        </View>
        <Stacks2 />
      </>
    );
  }
}
