import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import DrawerNavigator from './navigations/drawerNavigation'

import { NavigationContainer } from '@react-navigation/native';

import {firebaseConfig} from './config'

import firebase from 'firebase'

if(!firebase.apps.length){
  
  firebase.initializeApp(firebaseConfig)
}


export default class App extends React.Component{
  render(){
    return(
<NavigationContainer>
<DrawerNavigator />
</NavigationContainer>
    )
  }
}