// import
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import the images
import logo from '../assets/logo.png'

// stylesheet
const styles = StyleSheet.create({
  lgView:{
      height:250,
      alignItems: 'center',
      paddingTop:  80
  },
  logo: {
    width: 170,
    height: 170
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
  socialIcon:{
      marginVertical: 30,
      alignContent: 'stretch'
  }
})

// the login screen

function LoginScreen () {
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
          <View style={styles.boxBtn} >
            <Button title="Sign in" buttonStyle={styles.Btn} />
          </View> 
        </View>
        <View style={styles.socialIcon} >
        <SocialIcon
  button
  light
  type='instagram'
/>
          <SocialIcon raised={false} type='twitter'/>
        </View>
        

      </LinearGradient>
    </View>
  )
}

// export od the screen
export default (LoginScreen)
