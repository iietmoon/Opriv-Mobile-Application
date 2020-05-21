// import the  libraries 
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'
// import Admob 
// Stylesheet
const styles = StyleSheet.create({

  container:{
    flexDirection: 'row',
    alignContent: 'space-between',
  }
})

// The main screen
export default function BottomBar() {
    return (
      <View style={styles.bottomView}>
        <View style={styles.container} >
        <View><Text>hello</Text></View>
        <View><Text>hello</Text></View>
        <View><Text>hello</Text></View>
        </View>
      </View>
    )
  }
