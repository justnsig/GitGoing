import React, { Component } from "react";
import {Text} from 'react-native';
import {Button, Container} from 'native-base';

export default class AuthBTN extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <Button 
                    full
                    rounded
                    success
                    onPress = {() => loginUser(this.state.email, this.state.password)}
                >
                <Text>Login</Text>
                </Button>
                <Button 
                    full
                    rounded
                    primary 
                    onPress = {() => signUpUser(this.state.email, this.state.password)}
                >
                <Text>SignUp</Text>
                </Button>
        </Container>

        )
    }
}