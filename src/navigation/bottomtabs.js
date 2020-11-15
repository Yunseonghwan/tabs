import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import About from '../screens/About';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Home';

export default ({navigation, route}) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions(
      {
        title: name,
      },
      [route],
    );
  });
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="About" component={About} />
    </Tabs.Navigator>
  );
};
