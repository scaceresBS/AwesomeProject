import React, { Component} from 'react'
import { StyleSheet, Text, View }  from 'react-native'
import moment from 'moment' //Used to parse time... Terminal(yarn add moment)

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 34567, 98765],
}

function Timer({ interval}) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds()/10) //turns milli into 2 dec centi
  return (
  <Text style={styles.timer}>
    {duration.minutes()}:{duration.seconds()}:{centiseconds}
  </Text>
  )
}

function RoundButton({ title, color, background}){ //Three proeprties of button
 return(
   <View style={[ styles.button, { backgroundColor: background}]}>
     <View style = {styles.buttonBorder}>
      <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
     </View> 
   </View>
 )
}
export default class App extends Component {
   render() {
     return (
       <View style = {styles.container}>
         <Timer interval ={DATA.timer}/>
         <RoundButton title= 'Start' color= '#50D167' background= '#1B361F'/>
       </View>
     );
   }
} 

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#0D0D0D',  //Color of Background 
     alignItems: 'center',
     paddingTop: 130,             //Spaces down text (not hidden from notch)
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,            //Controls text size
    fontWeight: '200',       //Controls text thickness
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,   //must be half of width and height to be circle
    justifyContent: 'center',
    alignItems: 'center',     //These two center text x and y axis
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

//reference youtube:
//React Native Tutorial: Build a Complete Stopwatch App in 60 Minutes