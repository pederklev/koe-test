import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';
import Detail from './views/Detail';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: Detail }
});

export default App;
