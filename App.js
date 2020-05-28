//import dependencies
import React, { Component } from 'react';
//import the config of firebase
import firebaseConfig from './Config/firbase'
//import screens
import Navigator from './routes/AppContainer';
import LoginScreen from './Screens/loginScreen';

//the App View
class App extends Component{

  render(){
   return (
     <Navigator/>
   )
  }
}

export default App;