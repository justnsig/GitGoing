import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import Login from './src/Login';
import { connect, Provider } from 'react-redux';
import { INIT, CLONE, STASH, RESET, PUSH, PULL, ADD, COMMIT } from './src/actions';
import storeConfig from './src/store';

const store = storeConfig;

handleInit = () => {
  this.props.onInit();
};

handleClone = () => {
  this.props.onClone();
};

handleStash = () => {
  this.props.onStash();
};

handleReset = () => {
  this.props.onResets();
};

handlePush = () => {
  this.props.onPush();
};

handlePull = () => {
  this.props.onPull();
};

handleAdd = () => {
  this.props.onAdd();
};

handleCommit = () => {
  this.props.onCommit();
};

handleStatus = () => {
  this.props.onStatus();
};

const GitTest = ({ hint }) => (
  <Text>{hint}</Text>
);

const mapStateToProps = (state) => ({
  hint: state.hint
});

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch({ type: INIT });
  },
  onClone: () => {
    dispatch({ type: CLONE });
  },
  onStash: () => {
    dispatch({ type: STASH });
  },
  onResets: () => {
    dispatch({ type: RESET });
  },
  onPush: () => {
    dispatch({ type: PUSH });
  },
  onPull: () => {
    dispatch({ type: PULL });
  },
  onAdd: () => {
    dispatch({ type: ADD });
  },
  onCommit: () => {
    dispatch({ type: COMMIT });
  },
  onStatus: () => {
    dispatch({ type: STATUS });
  }
});

const GitChoices = connect(mapStateToProps, mapDispatchToProps)(GitTest)

export default class App extends React.Component {
  render() {
    return (
      //provider must wrap the app for react-redux to work
     <Provider store={ store }>
      <View style={styles.container}>
        <Text>GitGoing</Text>
        <Login />
        <GitChoices />
        <Text>{this.props.hint}</Text>
      </View>
    </Provider>
    
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

//this is where it differs from react. Ask for help.