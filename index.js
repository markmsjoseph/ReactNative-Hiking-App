// import React from 'react';
// import { View, AppRegistry } from 'react-native';
// import Header from './src/components/Header';
// import Login from './src/components/Login';
//
// const App = () => (
//   <View>
//       <Header headerText="HikePhoto" />
//       <Login />
//   </View>
//
// );
//
//
// AppRegistry.registerComponent('albums', () => App);
import React from 'react';
import { AppRegistry } from 'react-native';
import RouterComponent from './src/components/Router'

const App = () => (
      <RouterComponent />
);


AppRegistry.registerComponent('albums', () => App);
