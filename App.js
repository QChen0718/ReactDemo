/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BaseNav from './widget/main';
// import Mytabbar from './widget/mytabbar';
const App: () => React$Node = () => {
  return (
      <BaseNav/>
      // <Mytabbar/>
  );
};

export default App;
