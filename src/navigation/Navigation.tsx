import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Register from '../screens/Register';
import LoginScreen from '../screens/Login';
import AddDevice from '../screens/AddDevice';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddDevice" component={AddDevice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
