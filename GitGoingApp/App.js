import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GitGoing</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

