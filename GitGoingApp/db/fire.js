import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {fKey} from './fireKeys';
//import Config from 'react-native-config'

const firebaseConfig = {
  //congif.API_KEY
    apiKey: fKey.API_KEY,
    authDomain: fKey.AUTH_DOMAIN,
    databaseURL: fKey.DATABASE_URL,
    projectId: fKey.PROJECT_ID,
    storageBucket: fKey.STORAGE_BUCKET,
    messagingSenderId: fKey.MESSAGING_SENDER_ID,
  };
  console.log(process.env.API_KEY);
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
        let user = email.indexOf("@")
        fire.loginUser(email, password);
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
},

// askClip: (question, ignore) => {
//   let qArray = question.split(' ');
//   for(i=0; i<qArray.length; i++){
//     if(qArray[i] === ignore){
//       //Move through to switch if word isn't on ignore list
//       //If it is on list then skip index and go to next word
//       break;
//     }else{
//       switch(qArray[i]){
//         case "new":
//         case "make":
//         case "create":
//           //get data for match
//           break;
//         case "change":
//         case "switch":
//         case "alternate":
//           //get data for match
//           break;
//         case "remove":
//         case "delete":
//         case "destroy":
//           //get data for match
//           break;
//         case "reset":
//         case "back":
//         case "previous":
//           //get data for match
//           break;
//         case "add":
//         case "commit":
//         case "push":
//         case "upload":
//           //get data for match
//           break;
//         case "download":
//         case "pull":
//         case "grab":
//           //get data for match
//         break;
//         default:
//           //default
//       }
//     }
//   }
// }

}

export default fire;