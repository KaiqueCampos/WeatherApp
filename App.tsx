import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/route';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}