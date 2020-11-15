import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './bottomtabs';

const Stack = createStackNavigator();

export default class Stacks extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
    );
  }
}
