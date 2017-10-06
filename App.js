/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//  create a Component
const App = () => (
    <Header />
  );

// render to device
AppRegistry.registerComponent('albums', () => App);

export default App;
