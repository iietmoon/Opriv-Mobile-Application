// import
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
// import images
import Home from '../assets/Home.png'
import account from '../assets/account.png'
import chat from '../assets/chat.png'
// navigation
import {withNavigation} from 'react-navigation'


// stylesheet
const styles = StyleSheet.create({
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


// The main screen
 function FooterBar() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          {/* Items 1 */}
          <View style={styles.footerItems}>
            <Image source={Home} style={styles.footerIcons} />
            <Text style={styles.footerText}>
              home
            </Text>
          </View>
          {/* Items 2 */}
          <View style={styles.footerItems}>
            <View style={styles.footerCircle}>
            <Image source={chat} style={styles.footerIcons} />
            <Text style={styles.footerText}>
              chat
            </Text>
            </View>
          </View>
          {/* Items 3 */}
          <View style={styles.footerItems}>
            <Image source={account} style={styles.footerIcons} />
            <Text style={styles.footerText}>
              home
            </Text>
          </View>
        </View>
      </View>
    )
  }

  export default withNavigation(FooterBar);