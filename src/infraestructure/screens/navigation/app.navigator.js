import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import { CommissionersNavigator, HomeNavigator, EmergenciesNavigator, HelpNavigator } from './stores.navigator';
import { globalTheme } from '../../assets/styles/global';

const Tab = createBottomTabNavigator();

const TabIcon = {
  Inicio: 'home',
  Emergencias: 'alert-circle',
  Comisarias: 'location-sharp',
  Ayuda: 'help-circle',
  Configuración: 'settings-outline'
}

const createScreenOptions = ({ route }) => {
  const iconName = TabIcon[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: globalTheme.colors.primary,
    tabBarInactiveTintColor: globalTheme.colors.secondary,
    headerShown: false,
    // tabBarStyle: [
    //   {
    //     backgroundColor: 'transparent'
    //   },
    //   null
    // ]
  }

}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
      >
        <Tab.Screen name="Inicio" component={HomeNavigator} />
        <Tab.Screen name="Comisarias" component={CommissionersNavigator} />
        <Tab.Screen name="Emergencias" component={EmergenciesNavigator} />
        <Tab.Screen name="Ayuda" component={HelpNavigator} />
        <Tab.Screen name="Configuración" component={HelpNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



