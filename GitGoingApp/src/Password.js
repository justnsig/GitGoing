import React, { Component } from "react";
import { TextInput } from "react-native";

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = { password: 'Password'}; //this is the text that you can change
    }
    render() {
        return (
                <TextInput 
                    onChangeText={(text) => this.setState({password: text})} 
                    value={this.state.password} 
                    secureTextEntry = {true}
                    autoCorrect = {false}
                    autoCapitalize = "none"
                />
        )
    }
}

