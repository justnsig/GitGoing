import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDr7FQ1ZB99JyB_UOmqCAnzeO2UixpCgLE",
  authDomain: "gitgoing-51f28.firebaseapp.com",
  databaseURL: "https://gitgoing-51f28.firebaseio.com",
  projectId: "gitgoing-51f28",
  storageBucket: "gitgoing-51f28.appspot.com",
  messagingSenderId: "690526517251"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return ( 
         <Routes />
    );
  }
}


