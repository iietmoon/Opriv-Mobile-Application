//import libraries
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
// import the screen's
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
  }
);


export default createAppContainer(AppNavigator);