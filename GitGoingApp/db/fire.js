import * as firebase from 'firebase';
//import fireDB from './fireData';
import { Actions } from 'react-native-router-flux';

const firebaseConfig = {
    apiKey: "AIzaSyDr7FQ1ZB99JyB_UOmqCAnzeO2UixpCgLE",
    authDomain: "gitgoing-51f28.firebaseapp.com",
    databaseURL: "https://gitgoing-51f28.firebaseio.com",
    projectId: "gitgoing-51f28",
    storageBucket: "gitgoing-51f28.appspot.com",
    messagingSenderId: "690526517251"
  };
  
  firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const fire = {

signUpUser: (email, password) => {
    try{
      if(password.length < 6){
        alert("Please use a password that is no less than 6 characters.")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(fireUser){

        fire.loginUser();
      })
    }
    catch(err){
      console.log(err)
    }

  },

  loginUser: (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        console.log(user);
        Actions.gitInit();
      })
    }
    catch(err){
      console.log(err)
    }
  },

  writeData: (userID, name, milestone) => {
    db.ref('users/' + userID).set({
        username: name,
        mailestone: milestone
    })
},

readData: () => {
    db.ref('users/' + userID).once('value').then(function(snapshot){
        let username = (snapshot.val() && snapshot.val().username || 'Anonymous')
    })
},

updateData: () => {
    db.ref('users/' + userID)
    //unfinished
}

}

export default fire;