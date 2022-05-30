import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MenuScreen from '../screens/menu'
import IngredientsScreen from '../screens/ingredients'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StackNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Ingredients" component={IngredientsScreen} />
      </Stack.Navigator>
    );
  }
}
