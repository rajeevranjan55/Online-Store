import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import navigationString from './navigationString';
import * as Screens from "../Screens";
import BottomTab from './BottomTab';
const stack=createNativeStackNavigator();
const Routes = () => {
  return (
  <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name={navigationString.LangChange} component={Screens.LangChange}/>
       <stack.Screen name={navigationString.Home} component={Screens.Home}/>
       <stack.Screen name={navigationString.Login} component={Screens.Login}/>
       <stack.Screen name={navigationString.Signup} component={Screens.Signup}/>
       <stack.Screen name={navigationString.Welcome} component={Screens.Welcome}/>
       <stack.Screen name={navigationString.BottomTab} component={BottomTab}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default Routes;
