// import

import React, { Component } from "react";
import { Container, Header, Content, Button, Toast } from "native-base";
import { View, StyleSheet, Image, Text, Modal } from 'react-native'
// import
import FooterBar from '../Components/FooterBar'
// import the images
import Present from '../assets/present.png';
import Leave from '../assets/reminder_note.png';
import { TouchableHighlight } from 'react-native-gesture-handler';

// stylesheet
const styles = StyleSheet.create({
  TitleView: {
    alignItems: 'center',
    paddingVertical: 10,
    
  },
  Title: {
    fontSize: 17,
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
  }
})


export default class AttendanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
        <Container padder>
        <TouchableHighlight onPress={() =>
                  Toast.show({
                    text: "Thanks you!",
                    textStyle: { color: "yellow" },
                    buttonText: "Okay"
                  })
                }>
        <View style={styles.TitleView}>
            <Text style={styles.Title}>
              Attendance Manager
            </Text>
          </View>
        </TouchableHighlight>
    
          <View style={styles.mainView}>
            <Image source={Present} style={styles.imgView} />
            <Text style={styles.titleView}>
              Mark Me Present
            </Text>
          </View>
          <View style={styles.mainView}>
            <Image source={Leave} style={styles.imgView2} />
            <Text style={styles.titleView}>
              Submit Leave
            </Text>
          </View>
          <FooterBar />
        </Container>
    );
  }
}