// import
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
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

})

function AccountScreen () {
  return (
    <Container>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>
          Your account not verified 
        </Text>
      </View>
      <FooterBar />
    </Container>
  )
}

export default AccountScreen;
