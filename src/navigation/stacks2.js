import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabs from './TopTabs';

const Stack = createStackNavigator();

export default class Stacks2 extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TopTabs" component={TopTabs} />
      </Stack.Navigator>
    );
  }
}
