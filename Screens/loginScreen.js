// import
import React, {Component} from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Button, SocialIcon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
// import the images
import logo from '../assets/logo.png';
import fbLogo from '../assets/fb-logo.png';
import twLogo from '../assets/twitter-logo.png';

// stylesheet
const styles = StyleSheet.create({
  lgView:{
      height:250,
      alignItems: 'center',
      paddingTop:  80
  },
  logo: {
    width: 150,
    height: 150
  },
  boxView:{
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginTop: 30,
      borderRadius:10,
      paddingVertical: 25,
      paddingHorizontal: 15
  },
  BoxTitle:{
      alignItems: 'center',
  },
  Title:{
    color: '#000',
    fontSize: 22,
    fontWeight: "bold"
  },
  input:{
      borderBottomColor: '#000',
      fontSize:15,
  },
  forgot:{
    color: '#00baff',
    fontSize: 15,
    fontWeight: "normal"
  },
  boxBtn:{
    marginTop: 25,
    marginBottom: -45,
    alignItems: 'center',
  },
  Btn:{
      width: 150,
      backgroundColor: '#00baff',
      borderRadius: 5,
  },
  socialView:{
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  socialIcon:{
    width: 45,
    height: 45,
    marginHorizontal: 7,
  },
  upBox:{
    marginTop: 15,
    alignItems: 'center',
  },
  upBtn:{
    width: 200,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth:2,
    borderColor: '#FFF'
  }

})

// the login screen
function LoginScreen({navigation}) {
    return (
      <View>
      <LinearGradient colors={['#7fceee', '#406a79']} style={{height: 1000}}>
        <View style={styles.lgView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.boxView}>

          <View style={styles.BoxTitle} >
              <Text style={styles.Title} >Sign in</Text>
          </View>
          <View>
            <Input placeholder='Email' inputStyle={styles.input} />
            <Input placeholder="Password" secureTextEntry={true} inputStyle={styles.input}/>
          </View>
          <View style={styles.BoxTitle} >
              <Text style={styles.forgot} >Forgot Password?</Text>
          </View>

          {/*Login button*/}
          <View style={styles.boxBtn} >
            <Button title="Sign in" buttonStyle={styles.Btn} onPress={() => navigation.navigate('Home') } />
          </View> 
        </View>
        <View style={styles.socialView} >
          <Image source={fbLogo} style={styles.socialIcon} />
          <Image source={twLogo} style={styles.socialIcon} /> 
        </View>

        {/*Signup button*/}
        <View style={styles.upBox} >
           <Button title="Sign up" buttonStyle={styles.upBtn}/>
        </View> 
        
      </LinearGradient>
    </View>
    );
  }

export default withNavigation(LoginScreen);
