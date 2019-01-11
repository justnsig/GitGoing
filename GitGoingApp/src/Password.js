import React, { Component } from "react";
import { TextInput } from "react-native";

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = { text: 'Password'}; //this is the text that you can change
    }
    render() {
        return <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} 
        />
    }
}

