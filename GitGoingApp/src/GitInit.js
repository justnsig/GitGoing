import React from 'react'
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AntiClippy from './AntiClippy';
import * as Animatable from 'react-native-animatable';

//route to clone
const GitInit = () => {

   const goToGitClone = () => {
      Actions.gitClone()
   }
 
   return (
      <View style={styles.container}>
      
      <View style={styles.brownBox}><Animatable.Text animation="zoomInUp"><Text style={styles.title}>Git Init</Text></Animatable.Text>
      <View style={styles.circle1}>
       
      <Text style={styles.p}>This how you can save a new local repository (aka repo) to your machine. Type <Text style={{ fontWeight: 'bold' }}>git init </Text> to add a new empty repo to your machine.</Text>
      <AntiClippy style={styles.AntiClippy}/>
      
      </View> 
      </View>
      <TouchableOpacity style={styles.button}>
         <Button 
         onPress = {goToGitClone}
         title= "GitGoing to Git Clone"
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
    fontSize: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 10,
    paddingTop: 95,
    
   },
   //white circle
  circle1: {
   backgroundColor: '#fff',
   width: 400,
   height: 400,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 200,
   borderColor: '#4A4843',
   borderWidth: 15,
   marginTop:60,
   flexDirection: 'row',
   alignItems: 'center',
   
 },
 //brown box
 brownBox: {
   backgroundColor: '#A79B82',
   width: 410,
   height:575,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 220,
   marginTop: 50,
   paddingBottom: 5,
 },

//logo
 AntiClippy: {
   flexDirection: 'row',
   alignItems: 'center',
 },

 
 button: {
    color:'#FF6D70',
    marginTop: 20,
 },
 p:{
    color: 'black',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,

 },


 });

export default GitInit