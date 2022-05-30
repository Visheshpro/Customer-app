import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import StackNavigator from './stackNavigation';
import Profile from '../screens/profile';
import Menu from '../screens/menu';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={StackNavigator} />
        <Drawer.Screen name="About Us" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
