import React from 'react';
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AntiClippyHalf from './AntiClippyHalf';
import Login from './Login';
import Password from './Password';
import * as firebase from 'firebase';
//Not sure how important it is to use the form import but maybe big
import {Form} from 'native-base';
import AuthBTN from './AuthBTN';



const Home = () => {
   const goToGitInit = () => {
      Actions.gitInit()
   }

   state = {
    email: '',
    password: '',
    test: 'stuff'
  }
   //login and password are place holders until OKTA Auth is entered. Will need to restyle after

   //SignUp and SignIn Functions
   signUpUser = (email, password) => {
     console.log(`email: ${email}  Password: ${password}`)
      try{
        if(password.length < 6){
          alert("Please use a password that is no less than 6 characters.")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch(err){
        console.log(err)
      }
  
    }
  
    loginUser = (email, password) => {
      try{
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
          console.log(user);
        })
      }
      catch(err){
        console.log(err)
      }
    }

   return (
      <View style={styles.container}>
      <View style={styles.textBox1}>
      <View style={styles.circle}>
      <AntiClippyHalf style={styles.AntiClippyHalf}/>
      <Text style={styles.title}>GitGoing</Text>
      </View>
      <Form>
      <View style={styles.textInput1}><Login /></View> 
      <View style={styles.textInput}><Password /></View> 
      <View><AuthBTN/></View>
      </Form>
      </View> 
      <TouchableOpacity style = {{ marginTop: 150 }}> 
    
         <Button 
         onPress = {goToGitInit}
         title= "GitGoing to Git Init"
         color='#FF6D70'
         />  
      </TouchableOpacity>
      <Text style={styles.p}>Would you like to learn more?</Text>
      </View>
   )
}
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
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    marginBottom: 0,
   },
   //white circle
  circle: {
   backgroundColor: '#fff',
   width: 400,
   height: 400,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 200,
   borderColor: '#4A4843',
   borderWidth: 25,
   marginTop:100,
   
 },
 //brown box
 textBox1: {
   backgroundColor: '#A79B82',
   width: 500,
   height: 350,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30,
   marginTop: 50,
 },

//logo
 AntiClippyHalf: {
   flex: 1
 },

 //username
 textInput1: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 0,
   alignItems: 'center',
   
 },

 //password
 textInput: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 10,
   alignItems: 'center',
 },
 button: {
    color:'#FF6D70',
 },
 p:{
    color: 'white',
 },


 });

export default Home