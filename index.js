/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Tester, TestHookStore } from 'cavy';
import React, { Component } from "react";
import AppSpec from './specs/AppSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component{
  render(){
    return(
      <Tester specs={[AppSpec]} store = {testHookStore} waitTime={4000}>
       <App/>
      </Tester>

    );
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
