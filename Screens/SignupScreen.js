// import
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Input, Button, SocialIcon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import LoadingScreen from '../Screens/LoadingScreen'
// import the images
import logo from '../assets/logo.png'
import * as firebase from 'firebase'

// stylesheet
const styles = StyleSheet.create({
  lgView: {
    height: 250,
    alignItems: 'center',
    paddingTop: 80
  },
  logo: {
    width: 150,
    height: 150
  },
  boxView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  BoxTitle: {
    alignItems: 'center'
  },
  Title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    borderBottomColor: '#000',
    fontSize: 15
  },
  forgot: {
    color: '#00baff',
    fontSize: 15,
    fontWeight: 'normal'
  },
  boxBtn: {
    marginTop: 25,
    marginBottom: -45,
    alignItems: 'center'
  },
  Btn: {
    width: 150,
    backgroundColor: '#00baff',
    borderRadius: 5
  },
  upBox: {
    marginTop: 35,
    paddingHorizontal: 20
  },
  upBtn: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFF'
  }

})

// the login screen

class SignupScreen extends Component {
  render () {
    const loginAlert = () => Alert.alert(
      'The Signin Backend not working right now',
      'please contact the developer or sign in with google account',
      [
        {
          text: 'Close',
          onPress: () => console.log('Thank You!')
        }
      ],
      { cancelable: false }
    )
    const navigation = this.props.navigation;
    return (
      <View>
        <LinearGradient colors={['#7fceee', '#406a79']} style={{height: 1000}}>
          <View style={styles.lgView}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.boxView}>
            <View style={styles.BoxTitle}>
              <Text style={styles.Title}>
                Sign in
              </Text>
            </View>
            <View>
              <Input placeholder='Email' inputStyle={styles.input} onChangeText={email => this.state({ email})} />
              <Input
                placeholder='Password'
                secureTextEntry={true}
                inputStyle={styles.input}
                onChangeText={password => this.state({ password})} />
            </View>
            <View style={styles.BoxTitle}>
              <Text style={styles.forgot}>
                Forgot Password?
              </Text>
            </View>
            {/*Login button*/}
            <View style={styles.boxBtn}>
              <Button title='Sign in' buttonStyle={styles.Btn} onPress={loginAlert} />
            </View>
          </View>
          {/* login with google */}
          <View style={styles.upBox}>
            <SocialIcon title='Login with google' button type='google' />
            {/*Signup button*/}
            <SocialIcon title='Create New Account' button />
          </View>
        </LinearGradient>
      </View>

    )
  }
}

export default SignupScreen;
