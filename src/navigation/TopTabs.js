import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from '../screens/Home/HomeTab/Tab1';
import Tab2 from '../screens/Home/HomeTab/Tab2';

const Tabs = createMaterialTopTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Tab1';

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
      <Tabs.Screen name="Tab1" component={Tab1} />
      <Tabs.Screen name="Tab2" component={Tab2} />
    </Tabs.Navigator>
  );
};
