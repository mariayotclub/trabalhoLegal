import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';

export type RootStackParamList = {
  Login: undefined;    
  Home: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
   
    <NavigationContainer>
      
  
      <Stack.Navigator initialRouteName="Login">
        
       
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}