import React from 'react';
import { View } from 'react-native';

import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './src/footer';
import { NavigationContainer } from '@react-navigation/native';

import Formikv from './src/formik';
import Header from './Header';


 




export default function App() {

  const Stack = createStackNavigator();




   
    return (
     

      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Header} />
      <Stack.Screen name="login" component={Formikv} />
     
      
     
     
    </Stack.Navigator>
    </NavigationContainer>
      
     
      
    
      
    )
  
}



