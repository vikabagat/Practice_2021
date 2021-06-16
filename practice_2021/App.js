import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/MainScreen';
import CoursesScreen from './components/CoursesScreen'
import RozkladScreen from './components/RozkladScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'РОЗКЛАД ЗАНЯТЬ НА ТИЖДЕНЬ',
           headerStyle: {
              backgroundColor: '#1aaca6',
            },
            headerTintColor: '#fee481'}}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesScreen}
          options={({route}) => ({title: route.params.name, headerStyle: {
              backgroundColor: '#1aaca6',
            },
            headerTintColor: '#fee481'})}
        />
        <Stack.Screen
          name="Rozklad"
          component={RozkladScreen}
          options={({route}) => ({title: route.params.name,
          headerStyle: {
              backgroundColor: '#1aaca6',
            },
            headerTintColor: '#fee481'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;