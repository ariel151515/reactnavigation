// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';
import MenuScreen from '../screen/MenuScreen';
import ControlScreen from '../screen/ControlScree';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Control" component={ControlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
