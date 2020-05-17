// import
import React, {Component} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from 'react-native-elements';

// import the images
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

// stylesheet
const styles = StyleSheet.create({
  LogoImg: {
    width:50,
    height:50,
  },
  MenuImg:{
    width:27,
    height:27,
  }
})

// the login screen
class Navbar extends Component {
  render() {
    return (
      <Header 
          backgroundColor={'#fff'}
          leftComponent={<Image source={logo} style={styles.LogoImg} />}
          rightComponent={<Image source={menu} style={styles.MenuImg} />}
      />


    );
  }
}
export default Navbar;
