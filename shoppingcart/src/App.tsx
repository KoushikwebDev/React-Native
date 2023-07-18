import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamsList = {
  Home: undefined;
  Details: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Products',
            headerStyle: {
              backgroundColor: '#f4511e', // Set the background color
            },
            headerTitleStyle: {
              color: '#ffffff', // Set the text color
            },
            headerTintColor: '#ffffff', // Set the back button and title color
            headerShown: true, // Show the navigation bar
          }}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Product Details',
            headerStyle: {
              backgroundColor: '#42f4c2',
            },
            headerTitleStyle: {
              color: '#ffffff',
            },
            headerTintColor: '#ffffff',
            headerShown: true,
            // title: 'Product Details',
          }}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
