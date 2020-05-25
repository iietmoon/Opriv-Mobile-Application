//import dependencies
import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import * as firebase from 'firebase';
//import the config of firebase
import firebaseConfig from './Config/firbase'
//import screens
import Navigator from './routes/AppContainer';
import loginScreen from './Screens/loginScreen';
import LoadingScreen from './Screens/LoadingScreen';

//firebase initialize
firebase.initializeApp(firebaseConfig)

//export the App View
export default function App() {
  return (
      <Application/>
  );
}

//
const AppView = createSwitchNavigator({
  Loading: LoadingScreen, 
  login: loginScreen,
  appView: Navigator,
})

const Application = createAppContainer(AppView);