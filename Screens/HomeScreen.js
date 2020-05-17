// import
import React, {Component} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import the images
import logo from '../assets/logo.png';
import fbLogo from '../assets/fb-logo.png';
import twLogo from '../assets/twitter-logo.png';

// stylesheet
const styles = StyleSheet.create({
 TitleView:{
   alignItems: 'center',
   paddingVertical: 10
 },
 Title:{
   fontSize:17,
   fontWeight: "bold",
   color: '#222222'
 }
})

// the login screen
class HomeScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Opriv Technologies HR Management Service</Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
