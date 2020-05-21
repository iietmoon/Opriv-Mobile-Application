// import
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Container} from 'native-base'
// import the images
import MarkAtt from '../Components/MarkAtt';
import LeaveMang from '../Components/LeaveMang';
//import images
import Home from '../assets/Home.png';
import account from '../assets/account.png';
import chat from '../assets/chat.png'

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
    paddingHorizontal: 15
  },
  footerContent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerItems:{
    //justifyContent: 'center',
    //alignSelf: 'center',
    alignContent: 'center',
    //alignItems: 'center',
    //textAlign: 'center'
  },
  footerIcons:{
    width: 25,
    height: 25,
  }

})

function HomeScreen () {
  return (
    <Container>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>
          Opriv Technologies HR Management Service
        </Text>
      </View>
      <MarkAtt/>
      <LeaveMang/>
      
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          {/* Items 1 */}
          <View styles={styles.footerItems}>
            <Image source={Home} style={styles.footerIcons} />
            <Text>
              footer 1
            </Text>
          </View>
          {/* Items 2 */}
          <View>
            <Text>
              footer 2
            </Text>
          </View>
          {/* Items 3 */}
          <View>
            <Text>
              footer 3
            </Text>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default HomeScreen
