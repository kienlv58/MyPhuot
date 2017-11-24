/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TestFirebase} from './component/testfirebase'
import {RouteStack} from "./Routes";
import SideMenu from './component/routers';

export default class App extends Component<{}> {
  render() {
    return (
      <RouteStack/>
    );
  }
}