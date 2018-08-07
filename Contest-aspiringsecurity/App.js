/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, { Component } from 'react';
import RootStack from './src/routes';
// import HomeScreen from './7/screens/HomeScreen';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
      // <HomeScreen />
    );
  }
}
