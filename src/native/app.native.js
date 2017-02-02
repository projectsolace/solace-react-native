import React from "react";
import {Scene, Router} from "react-native-router-flux";
import Login from './screens/Login.native';
import Signup from './screens/Signup.native';
import Homepage from './screens/Homepage.native';
import CompleteProfile from './screens/CompleteProfile.native';
import { Provider } from 'react-redux';
import store from './store.native';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root">
            <Scene key="entryPoint" component={Login} initial hideNavBar />
            <Scene key="signup" component={Signup} title="Signup"/>
            <Scene key="completeProfile" component={CompleteProfile} title="CompleteProfile" hideNavBar />
            <Scene key="homepage" component={Homepage} title="Homepage"/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
