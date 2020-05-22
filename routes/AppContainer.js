//import libraries
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import the screen's
import LoginScreen from '../Screens/loginScreen';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import AccountScreen from '../Screens/AccountScreen';
import AttendanceScreen from '../Screens/AttendanceScreen'

//import the header
import NavBar from '../Components/NavBar'
const screens = {
  Attendance: {
    screen: AttendanceScreen,
    navigationOptions: {
      header: ()=> <NavBar/> ,
    }
  },

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
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      header: ()=> <NavBar/> ,
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      header: ()=> <NavBar/> ,
    }
  },

}




const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);