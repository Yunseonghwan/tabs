import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 50}}>About</Text>
      </View>
    );
  }
}
