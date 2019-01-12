import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDr7FQ1ZB99JyB_UOmqCAnzeO2UixpCgLE",
    authDomain: "gitgoing-51f28.firebaseapp.com",
    databaseURL: "https://gitgoing-51f28.firebaseio.com",
    projectId: "gitgoing-51f28",
    storageBucket: "gitgoing-51f28.appspot.com",
    messagingSenderId: "690526517251"
  };
  
  firebase.initializeApp(firebaseConfig);

const authFunc = {

signUpUser: (email, password) => {
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

  },

  loginUser: (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        console.log(user);
      })
    }
    catch(err){
      console.log(err)
    }
  }

}

export default authFunc;