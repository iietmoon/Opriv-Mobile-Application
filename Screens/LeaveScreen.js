// import
import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native'
import { Container } from 'native-base';
import {withNavigation} from 'react-navigation'
// import
import FooterBar from '../Components/FooterBar'
// import the images
import entrepreneurs from '../assets/entrepreneurs.png';
import noteTaking from '../assets/note-taking.png';

// stylesheet
const styles = StyleSheet.create({
  TitleView: {
    alignItems: 'center',
    paddingVertical: 10
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222'
  },
  mainView:{
    height: 225,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    shadowColor: "#ced4da",
    shadowOffset: {
       width: 0,
        height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,

  },
  imgView:{
    width:200,
    height:150
  },
  titleView:{
    fontSize:30,
    fontWeight: 'bold',
    paddingTop: -15,
    color: '#00246e'
  }

})

function LeaveScreen({navigation}) {
  const LeaveAlert = () => Alert.alert(
    'Thanks You!',
    'Your Leave request has been marked',
    [
      {
        text: 'Close',
        onPress: () => console.log('Thank You!')
      }
    ],
    { cancelable: false }
  )
  return (
    <Container>

     {/* Title */}
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Leave Management</Text>
      </View>
      
      {/* Submit */}
      <TouchableOpacity activeOpacity={0.9} onPress={LeaveAlert}>
       <View style={styles.mainView}>
            <Image source={entrepreneurs} style={styles.imgView} />
            <Text style={styles.titleView} >Submit Leave</Text>
      </View>
      </TouchableOpacity>

      {/* Leave Management */}
      <TouchableOpacity activeOpacity={0.9}>
       <View style={styles.mainView}>
            <Image source={noteTaking} style={styles.imgView} />
            <Text style={styles.titleView} >Previous Leaves</Text>
      </View>
      </TouchableOpacity>

      {/* Footer */}
      <FooterBar />
    </Container>
  )
}

export default withNavigation(LeaveScreen);
