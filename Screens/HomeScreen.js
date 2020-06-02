// import
import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Container } from 'native-base';
import {withNavigation} from 'react-navigation'
// import
import FooterBar from '../Components/FooterBar'
// import the images
import entrepreneurs from '../assets/entrepreneurs.png';
import noteTaking from '../assets/note-taking.png';
import { ScrollView } from 'react-native-gesture-handler';

// stylesheet
const styles = StyleSheet.create({
  TitleView: {
    alignItems: 'center',
    paddingVertical: 10
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222'
  },
  mainView:{
    height: 225,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    shadowColor: "#ced4da",
    shadowOffset: {
       width: 0,
        height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,

  },
  imgView:{
    width:200,
    height:150
  },
  titleView:{
    fontSize:32,
    fontWeight: 'bold',
    paddingTop: -15,
    color: '#00246e'
  }

})

function HomeScreen({navigation}) {
  return (
    <Container>

    {/* Mark Attendance */}
    <ScrollView>
      
    <View style={styles.TitleView}>
        <Text style={styles.Title}>HR Management Service</Text>
      </View>
      
      {/* Mark Attendance */}
      <TouchableOpacity activeOpacity={0.9} onPress={()=> navigation.navigate('Attendance') }>
       <View style={styles.mainView}>
            <Image source={entrepreneurs} style={styles.imgView} />
            <Text style={styles.titleView} >Mark Attendance</Text>
      </View>
      </TouchableOpacity>

      {/* Leave Management */}
      <TouchableOpacity activeOpacity={0.9} onPress={()=> navigation.navigate('Leave')}>
       <View style={styles.mainView}>
            <Image source={noteTaking} style={styles.imgView} />
            <Text style={styles.titleView} >Leave Management</Text>
      </View>
      </TouchableOpacity>

    </ScrollView>
      {/* Footer */}
      <FooterBar />
    </Container>
  )
}

export default withNavigation(HomeScreen);
