import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home';
import CommissionersScreen from '../Commissioners';
import HelpScreen from '../Help';
import EmergenciesScreen from '../Emergencies';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export const CommissionersNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Commissioners" component={CommissionersScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export const HelpNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export const EmergenciesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Emergencies" component={EmergenciesScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


