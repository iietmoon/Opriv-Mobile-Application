// import the  libraries 
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'
// import Admob 
// Stylesheet
const styles = StyleSheet.create({
  bottomView: {
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#69d7ff',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  }
})

// The main screen
export default function BottomBar() {
    return (
      <View style={styles.bottomView}>
        <Text>Hello</Text>
      </View>
    )
  }
