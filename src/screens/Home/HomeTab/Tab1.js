import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Tab1 extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 50}}>Tab1</Text>
      </View>
    );
  }
}
