// import
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Container } from 'native-base'
// import
import FooterBar from '../Components/FooterBar'
// stylesheet
const styles = StyleSheet.create({
  TitleView: {
    alignItems: 'center',
    paddingVertical: 10
  },
  Title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222'
  },
  footer: {
    height: 60,
    backgroundColor: '#68d6ff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 25
  },
  footerContent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerItems: {
    alignItems: 'center'
  },
  footerIcons: {
    width: 20,
    height: 20
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#5c95ac',
    textTransform: 'uppercase'
  },
  footerTextInactive: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#5c95ac',
    textTransform: 'uppercase'
  },
  footerCircle:{
   backgroundColor: '#fff',
   width: 85,
   height: 85,
   borderRadius: 85/2,
   justifyContent: 'center',
   alignItems: "center",
   shadowColor: "#000",
   shadowOffset: {
    	width: 0,
    	height: 12,
   },
   shadowOpacity: 0.58,
   shadowRadius: 16.00,
   elevation: 24,
  }

})

function ChatScreen () {
  return (
    <Container>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>
          ChatScreen
        </Text>
      </View>
      <FooterBar />
    </Container>
  )
}

export default ChatScreen
