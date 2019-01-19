import React, {Component} from 'react'
import { widthPercentageToDP as wp} from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacity, Text, Button, StyleSheet, View, TextInput } from 'react-native'
import {Form} from 'native-base';
import { Actions } from 'react-native-router-flux'
import AntiClippy from './AntiClippy'
import * as Animatable from 'react-native-animatable'
import { askClip } from '../scrape/anticlipQA';

// route to question
const goToHome = () => {
    Actions.home()
}
export default class InputBox extends Component {

constructor(props){
    super(props)

    this.state = ({
    question: ''
    })
}
render(){
   return (
      <View style={styles.container}>
     
      <Text style={styles.title}>Got Questions</Text>
      <View style={styles.circle1}>
      <Text style={styles.p}>Have Questions?  Ask Anti-Clippy what kind of Git operation you need help with...</Text> 
      <Animatable.View animation="bounceInRight"><AntiClippy style={styles.AntiClippy}/></Animatable.View>
     
 
      </View>
      <Form>
      <TextInput style={styles.textInput1}
        placeholder="   Your Git Question Here..."
        onChangeText={(text) => this.setState({question: text})}
        value={this.state.question} 
        autoCorrect = {false}
        ></TextInput>
      <TouchableOpacity style={styles.button}>
         <Button 
         onPress = {() => console.log(askClip(this.state.question))}
         title= "Ask Anti-Clippy"
         color='#FF6D70'
         />
         </TouchableOpacity>
         <TouchableOpacity>
         <Button 
         onPress = {goToHome}
         title= "GitGoing Back Home"
         color='#FF6D70'
         />
      </TouchableOpacity>
      </Form>
      </View>
         
         
   )
}
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
    
    flexDirection: 'column',
    fontSize: hp('5%'),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    paddingTop: hp('5%'),
    
   },
   //white circle
  circle1: {
   backgroundColor: '#fff',
   width: 400,
   height: hp('50%'),
   justifyContent: 'center',
   borderRadius: 200,
   borderColor: '#4A4843',
   borderWidth: 15,
   marginTop:hp('1%'),
   flexDirection: 'row',
   alignItems: 'center',
   
 },
 //brown box
 brownBox: {
   backgroundColor: '#A79B82',
   width: wp('10%'),
   height:hp('100%'),
   alignItems: 'center',
   justifyContent: 'center'
 },

//logo
 AntiClippy: {
   flexDirection: 'row',
   alignItems: 'center',
 },

 
 button: {
    color:'#FF6D70',
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
 },
 p:{
    color: 'black',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,

 },
 textInput1: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: wp('60%'),
   height: hp('5%'),
   marginTop: wp('3%'),
      
   
 },


 });