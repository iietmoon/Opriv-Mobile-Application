// import
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Alert, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Input, SocialIcon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
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

// Your web app's Firebase configuration
// the login screen

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = { 
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
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
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
    const navigation = this.props.navigation;
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
                Sign in
              </Text>
            </View>
            <View>
              <Input 
                placeholder='Email' 
                inputStyle={styles.input} 
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                 />
              <Input
                placeholder='Password'
                secureTextEntry={true}
                inputStyle={styles.input}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')} />
            </View>
            <View style={styles.BoxTitle}>
              <Text style={styles.forgot}>
                Forgot Password?
              </Text>
            </View>
            {/*Login button*/}
            <View style={styles.boxBtn}>
              <Button 
              title='Sign in' 
              buttonStyle={styles.Btn} 
              onPress={() => this.userLogin()} />
            </View>
          </View>
          {/* login with google */}
          <View style={styles.upBox}>
            <Button title={'Login with google'} onPress={loginAlert} buttonStyle={styles.ggBtn} />
            {/*Signup button*/}
            
            <Button title={'Create New Account'} onPress={()=> navigation.navigate('Signup')} buttonStyle={styles.newAccoutBtn} />
            
          </View>
        </LinearGradient>
      </View>

    )
  }
}

export default withNavigation(LoginScreen);
