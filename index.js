/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import {name as appName} from './app.json';
import store from './src/redux/store';
import FullScreen from './src/FullScreen';
FullScreen.enable();

const Fuji = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Fuji);
