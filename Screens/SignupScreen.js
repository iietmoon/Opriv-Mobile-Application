// import
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Alert, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Input, Button, SocialIcon } from 'react-native-elements'
// import the images
import logo from '../assets/logo.png';
//firbease
import firebase from '../Config/firebase';
import 'firebase/auth';
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
  },
  newAccoutBtn: {
    marginVertical:15,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#00baff',
  },
  ggBtn: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#DB4437',
  }

})

// the login screen

class SignupScreen extends Component {
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }




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

    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View>
        <LinearGradient colors={['#7fceee', '#406a79']} style={{height: 1000}}>
          <View style={styles.lgView}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.boxView}>
            <View style={styles.BoxTitle}>
              <Text style={styles.Title}>
                Create new account
              </Text>
            </View>
            <View>
              <Input placeholder='full-name*' 
                     inputStyle={styles.input} 
                     value={this.state.displayName}
                     onChangeText={(val) => this.updateInputVal(val, 'displayName')}
              />
              <Input
                     style={styles.inputStyle}
                     placeholder="Email"
                     value={this.state.email}
                     onChangeText={(val) => this.updateInputVal(val, 'email')}
              />
              <Input
                     style={styles.inputStyle}
                     placeholder="Password"
                     value={this.state.password}
                     onChangeText={(val) => this.updateInputVal(val, 'password')}
                     secureTextEntry={true}
              />
              
            </View>
            {/*Login button*/}
            <View style={styles.boxBtn}>
              <Button title='Sign up' buttonStyle={styles.Btn} onPress={() => this.registerUser()} />
            </View>
          </View>
        </LinearGradient>
      </View>

    )
  }
}

export default SignupScreen;
