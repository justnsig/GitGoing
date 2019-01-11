import React, { Component } from "react";
import { TextInput } from "react-native";

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = { email: 'User Email'}; //this is the text that you can change
    }
    render() {
        return <TextInput 
                onChangeText={(text) => this.setState({email: text})} 
                value={this.state.text} 
                autoCorrect = {false}
                autoCapitolize = "none"
                />
    }
}

