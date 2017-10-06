/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//  create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

// render to device
AppRegistry.registerComponent('albums', () => App);

export default App;
