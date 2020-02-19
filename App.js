import React, { Component} from 'react'
import { StyleSheet, Text, View }  from 'react-native'

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 34567, 98765],
}

export default class App extends Component {
   render() {
     return (
       <View style = {styles.container}>
         
       </View>
     );
   }
} 

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#0D0D0D',  /**Color of Background */
     alignItems: 'center',
  },
})