import React from 'react'
import { widthPercentageToDP as wp} from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AntiClippyL from './AntiClippyL';
import * as Animatable from 'react-native-animatable'
//route to status
const GitClone = () => {
   const goToStatus = () => {
      Actions.gitStatus()
   }
   return (
      <View style={styles.container}>
      <View style={styles.brownBox}>
      <Animatable.Text animation="zoomInDown"><Text style={styles.title}>Git Clone</Text></Animatable.Text>
      <View style={styles.circle1}>
      <AntiClippyL style={styles.AntiClippy}/> 
      <Text style={styles.p}>This is how you copy a repo (repository) you or someone else created to your computer. Type <Text style={{ fontWeight: 'bold' }}>git clone </Text> then paste the link from GitHub and watch the magic!</Text>
      
     
      </View>
      </View>
      <TouchableOpacity style={styles.button}>
         <Button 
         onPress = {goToStatus}
         title= "GitGoing to Git Status"
         color='#FF6D70'
         />
      </TouchableOpacity>
      </View>
         
      
   )
}
//style
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#4A4843',
      alignItems: "center",      
    },
    
   title: {
      color: '#FF6D70',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: hp('7%'),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: hp('15%'),
    paddingTop: hp('8%'),
    
   },
   //white circle
  circle1: {
   backgroundColor: '#fff',
   width: wp('100%'),
   height: hp('60%'),
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 100,
   borderColor: '#4A4843',
   borderWidth: 15,
   marginTop:hp('3%'),
   flexDirection: 'row',
   alignItems: 'center',
   
 },
 //brown box
 brownBox: {
   backgroundColor: '#A79B82',
   width: wp('90%'),
   height:hp('70%'),
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 120,
   marginTop: hp('2%'),
   paddingBottom: hp('1%'),
 },

//logo
 AntiClippy: {
   flexDirection: 'row',
   alignItems: 'center',
 },

 
 button: {
    color:'#FF6D70',
    marginTop: hp('1%'),
 },
 p:{
    color: 'black',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,

 },


 });
export default GitClone