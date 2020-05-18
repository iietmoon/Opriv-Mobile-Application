// import
import React, {Component} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
// import the images
import MarkAtt from '../Components/MarkAtt';
import LeaveMang from '../Components/LeaveMang';
import BottomBar from '../Components/BottomBar'
import { Container } from 'native-base';

// stylesheet
const styles = StyleSheet.create({
 TitleView:{
   alignItems: 'center',
   paddingVertical: 10
 },
 Title:{
   fontSize:17,
   fontWeight: "bold",
   color: '#222222'
 }
})

// the login screen
class HomeScreen extends Component {
  render() {
    return (
      <Container>
       <BottomBar/>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Opriv Technologies HR Management Service</Text>
        </View>
        <MarkAtt/>
        <LeaveMang/>
        
      </Container>
    );
  }
}
export default HomeScreen;
