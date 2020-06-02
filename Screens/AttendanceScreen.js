// import libraries
import React, { state, useState } from 'react'
import { Container } from 'native-base'
import { View, StyleSheet, Image, Text, Dimensions, Alert } from 'react-native'
// import footer
import FooterBar from '../Components/FooterBar'
// import the images
import Present from '../assets/present.png'
import Leave from '../assets/reminder_note.png'
import { TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

// stylesheet
const screen = Dimensions.get('screen')
const styles = StyleSheet.create({
  TitleView: {
    alignItems: 'center',
    paddingVertical: 10

  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222'
  },
  mainView: {
    height: 225,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,

    shadowColor: '#ced4da',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5

  },
  imgView: {
    width: 200,
    height: 150
  },

  titleView: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: -15,
    color: '#00246e'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: screen.height,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
    width: 300,
    height: 230,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  modalText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  modalP: {
    fontSize: 16
  }
})

// start of the function
function AttendanceScreen () {
  const PresentAlert = () => Alert.alert(
    'Thanks You!',
    'Your Presentation has been marked',
    [
      {
        text: 'Close',
        onPress: () => console.log('Thank You!')
      }
    ],
    { cancelable: false }
  )
  const LeaveAlert = () => Alert.alert(
    'My Timline!',
    'Your Must be present in your desk \n Moday To Friday : \n 9AM-12:30PM & 2PM-5PM \n Saturday :\n 9AM-1PM \n Sunday :\n Off ',
    [
      {
        text: 'Close',
        onPress: () => console.log('Thank You!')
      }
    ],
    { cancelable: false }
  )
  // function of The Popup
  return (
    <Container>
       <ScrollView>
       <TouchableHighlight>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>
            Attendance Manager
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={PresentAlert} activeOpacity={0.9}>
        <View style={styles.mainView}>
          <Image source={Leave} style={styles.imgView} />
          <Text style={styles.titleView}>
            Mark Me Present
          </Text>
        </View>
      </TouchableOpacity>

      {/* Submit Leave*/}
      <TouchableOpacity onPress={LeaveAlert} activeOpacity={0.9}>
        <View style={styles.mainView}>
          <Image source={Present} style={styles.imgView} />
          <Text style={styles.titleView}>
            My Timeline
          </Text>
        </View>
      </TouchableOpacity>

       </ScrollView>
       <FooterBar />
    </Container>
  )
}

// export the  component
export default AttendanceScreen
