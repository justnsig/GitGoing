import React, { Component } from "react";
import { TextInput } from "react-native";

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = { text: 'User Name'};
    }
    render() {
        return <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text}
        />
    }
}