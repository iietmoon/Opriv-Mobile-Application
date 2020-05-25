// import
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
// import images
import Home from '../assets/Home.png'
import account from '../assets/account.png'
import chat from '../assets/chat.png'
// navigation
import { withNavigation } from 'react-navigation'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

// stylesheet
const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#68d6ff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 35
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
    width: 27,
    height: 27
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
  footerCircle: {
    backgroundColor: '#fff',
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5
  }

})

// The main screen
function FooterBar ({navigation}) {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        {/* Items 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.6}>
          <View style={styles.footerItems}>
            <Image source={Home} style={styles.footerIcons} />
          </View>
        </TouchableOpacity>
        {/* Items 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('Chat')} activeOpacity={0.9}>
        <View style={styles.footerItems}>
            <View style={styles.footerCircle}>
              <Image source={chat} style={styles.footerIcons} />
              <Text style={styles.footerText}>
                chat
              </Text>
            </View>
        </View>
        </TouchableOpacity>
        {/* Items 3 */}
        <TouchableOpacity onPress={() => navigation.navigate('Account')} activeOpacity={0.6}>
         <View style={styles.footerItems}>
            <Image source={account} style={styles.footerIcons} />

         </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default withNavigation(FooterBar)
