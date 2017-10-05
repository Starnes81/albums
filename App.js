/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import library to help create Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//  create a Component
const App = () => (
    <Text>Some Text</Text>
  );

// render to device
AppRegistry.registerComponent('albums', () => App);

export default App;
