import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login';
import RegisterScreen from '../Register';

const Stack = createStackNavigator();

export const PublicNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}