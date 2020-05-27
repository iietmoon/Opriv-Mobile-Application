//import dependencies
import React, { Component } from 'react';
//import the config of firebase
import firebaseConfig from './Config/firbase'
//import screens
import Navigator from './routes/AppContainer';
import loginScreen from './Screens/loginScreen';
import fire from './Config/firbase';

//the App View
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidUpdate(){
    this.autListiner();
  }

  autListiner(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){ 
        this.setState({user});
      }else{
        this.setState({user: null})
      }
    });
  }

  render(){
    return(
      { this.state.user ? (<Navigator/> : <loginScreen/> )}
    )
  }
}

export default App;