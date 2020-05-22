// import libraries
import React, { state, useState } from 'react'
import { Container, } from 'native-base'
import { View, StyleSheet, Image, Text, Modal, Dimensions, Alert } from 'react-native'
// import footer
import FooterBar from '../Components/FooterBar'
// import the images
import Present from '../assets/present.png'
import Leave from '../assets/reminder_note.png'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

// stylesheet
const screen = Dimensions.get("screen");
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
    height: 200,
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
    width: 125,
    height: 115
  },
  imgView2: {
    width: 153,
    height: 115
  },
  titleView: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
    color: '#00246e'
  },
  modal:{
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
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  modalText:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  modalP:{
    fontSize: 16,
  }
})

// start of the function
function AttendanceScreen () {
  
  // function of The Popup
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container>
      <TouchableHighlight>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>
            Attendance Manager
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => {setModalVisible(!modalVisible);}} activeOpacity={0.9}>
        <View style={styles.mainView}>
          <Image source={Present} style={styles.imgView} />
          <Text style={styles.titleView}>
            Mark Me Present
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.mainView}>
        <Image source={Leave} style={styles.imgView2} />
        <Text style={styles.titleView}>
          Submit Leave
        </Text>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
                          setModalVisible(!modalVisible);
                        }}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Thank You!
            </Text>
            <Text style={styles.modalP}>
              Your attendance has been marked
            </Text>
          </View>
        </View>
      </Modal>
      <FooterBar />
    </Container>
  )
}

// export the  component
export default AttendanceScreen
