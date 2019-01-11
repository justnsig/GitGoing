import React, { Component } from "react";
import { TextInput } from "react-native";
import {Button} from 'native-base';

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = { password: 'Password'}; //this is the text that you can change
    }
    render() {
        return <TextInput 
                    onChangeText={(text) => this.setState({password: text})} 
                    value={this.state.text} 
                    secureTextEntry = {true}
                    autoCorrect = {false}
                    autoCapitalize = "none"
                />
                <Button 
                    full
                    rounded
                    success
                    onPress = {() => auth.loginUser(this.state.email, this.state.password)}
                >
                <Text style={styles.textBTN}>Login</Text>
                </Button>
                <Button 
                    full
                    rounded
                    primary 
                    onPress = {() => auth.signUpUser(this.state.email, this.state.password)}
                >
                <Text style={styles.textBTN}>SignUp</Text>
                </Button>
    }
}

