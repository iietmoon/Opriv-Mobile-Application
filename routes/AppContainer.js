//import libraries
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import the screen's
import LoginScreen from '../Screens/loginScreen';
import HomeScreen from '../Screens/HomeScreen'
//import the header
import NavBar from '../Components/NavBar'
const screens = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: ()=> <NavBar/> ,
    }
  },
}




const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);