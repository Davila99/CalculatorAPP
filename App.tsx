import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/screens/Calculator';
import ListKeys from './src/screens/ListKeys';

export default function App() {
  return (
    <View >
      {/* <Calculator/> */}
      <ListKeys/>
    </View>
    
  );
}

