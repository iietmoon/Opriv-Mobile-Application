//import dependencies
import React, { Component } from 'react';
import {View, ActivityIndicator} from 'react-native';
import firebase from 'firebase';
//export the App View
export default class LoadingScreen extends Component {

  componentDidMount(){
    this.UserLogin();
  }
   UserLogin =()=>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.props.navigation.navigate('appView')
      }else{
        this.props.navigation.navigate('login')
      }
    })
  }

  render(){

    return (
      <View>
          <ActivityIndicator />
      </View>
      
    );
  }

}