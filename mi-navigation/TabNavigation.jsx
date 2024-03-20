// TabNavigation.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Screen
import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingsScreen';
import MenuScreen from './screen/MenuScreen';


const MyTabs = () => {
  return (
        <Tab.Navigator>
           <Tab.Screen name="Home" component={HomeScreen} />
           <Tab.Screen name="Settings" component={SettingsScreen} />
           <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
  );
}

export default MyTabs;
