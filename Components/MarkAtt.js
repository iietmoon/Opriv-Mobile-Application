// import
import React, {Component} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import the images
import entrepreneurs from '../assets/entrepreneurs.png';

// stylesheet
const styles = StyleSheet.create({
   mainView:{
     height: 200,
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
     width:150,
     height:118
   },
   titleView:{
     fontSize:30,
     fontWeight: 'bold',
     paddingTop: 15,
     color: '#00246e'
   }
})

// the login screen
class MarkAtt extends Component {
  render() {
    return (
          <View style={styles.mainView}>
            <Image source={entrepreneurs} style={styles.imgView} />
            <Text style={styles.titleView} >Mark Attendance</Text>
          </View>


    );
  }
}
export default MarkAtt;
