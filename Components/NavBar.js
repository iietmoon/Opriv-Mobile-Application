// import
import React, {Component} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Container, Header} from 'react-native-elements';
// import the images
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

// stylesheet
const styles = StyleSheet.create({
  LogoImg: {
    width:45,
    height:45,
  },
  MenuImg:{
    width:27,
    height:27,
  },
  container:{
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222'
  },
})

// the login screen
class Navbar extends Component {
  render() {
    return (
       <Header
         containerStyle={styles.container}
         centerComponent={<Text style={styles.Title}>Opriv Technologies</Text>}
       />
    );
  }
}
export default Navbar;
