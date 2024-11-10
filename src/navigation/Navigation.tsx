import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Register from '../screens/Register';
import LoginScreen from '../screens/Login';
import AddDevice from '../screens/AddDevice';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterPersonalInfo from '../screens/Register/RegisterPersonalInfo';
import RegisterAccessibility from '../screens/Register/RegisterAccessibility';
import RegisterSecurity from '../screens/Register/RegisterSecurity';
import RegisterConfirmation from '../screens/Register/RegisterConfirmation';
import RegisterMedicalInfo from '../screens/Register/RegisterMedicalInfo';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddDevice" component={AddDevice} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="RegisterPersonalInfo" component={RegisterPersonalInfo} />
        <Stack.Screen name="RegisterAccessibility" component={RegisterAccessibility} />
        <Stack.Screen name="RegisterSecurity" component={RegisterSecurity} />
        <Stack.Screen name="RegisterMedicalInfo" component={RegisterMedicalInfo} />
        <Stack.Screen name="RegisterConfirmation" component={RegisterConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
