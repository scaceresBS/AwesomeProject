import React, { Component} from 'react'
import { StyleSheet, Text, View, ScrollView }  from 'react-native'
import moment from 'moment' //Used to parse time... Terminal(yarn add moment)

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 34567, 98765],
}

function Timer({ interval, style}) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds()/10) //turns milli into 2 dec centi
  return (
  <Text style={style}>
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
function Lap({ number, interval, fastest, slowest}){
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest,
  ]
  return(
    <View style={styles.lap}>
      <Text style={lapStyle}>Lap {number}</Text>
      <Timer style={lapStyle} interval={interval}/>
    </View>
  )
}

function LapsTable({ laps}) {
  const finishedLaps = laps.slice(1)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if(lap < min) min = lap
      if(lap > max) max = lap
    })
  }
  return(
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap 
         number={laps.length - index}  //warning? 24:40?
         key={laps.length - index} 
         interval={lap} 
         fastest={lap == min}
         slowest={lap == max}
         />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
 return(
   <View style = {styles.buttonsRow}>{ children }</View>
 )
}
export default class App extends Component {
   render() {
     return (
       <View style = {styles.container}>
         <Timer interval ={DATA.timer} style={styles.timer}/>
         <ButtonsRow>
           <RoundButton title= 'Reset' color= '#FFFFFF' background= '#3D3D3D'/>
           <RoundButton title= 'Start' color= '#50D167' background= '#1B361F'/>
         </ButtonsRow>
         <LapsTable laps={DATA.laps} />
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
     paddingHorizontal: 20,
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
  },
  buttonsRow:{
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531',
  },
})

//All athestics are complete... now start working on user input! or actual use!
//Time: 35:00