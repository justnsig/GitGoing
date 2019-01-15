import React from 'react'
import { View, Button, StyleSheet, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'


const Home = () => {
    {Actions.home()}
};

const Init = () => {
    {Actions.gitInit()}
};

const Clone = () => {
    {Actions.gitClone()}
};

const Pull = () => {
    {Actions.gitPull()}
};

const Add = () => {
    {Actions.gitAdd()}
};

const Status = () => {
    {Actions.gitStatus()}
};

const Stash = () => {
    {Actions.gitStash()}
};

const Reset = () => {
    {Actions.gitReset()}
};

const Commit = () => {
    {Actions.gitCommit()}
};

const Push = () => {
    {Actions.gitPush()}
};

export default class DrawerItems extends React.Component {
    render () {
    
   return (
    <View style = { styles.button }>
       <Button title="GitGoing Home" onPress={Home} color='#4A4843' />
       <Button title="Git Init" onPress={Init} color='#A79B82'/>
       <Button title="Git Clone" onPress={Clone} color='#4A4843'/>
       <Button title="Git Status" onPress={Status} color='#A79B82'/>
       <Button title="Git Pull" onPress={Pull} color='#4A4843'/>
       <Button title="Git Add" onPress={Add} color='#A79B82'/>
       <Button title="Git Stash" onPress={Stash} color='#4A4843'/>
       <Button title="Git Reset" onPress={Reset} color='#A79B82'/>
       <Button title="Git Commit" onPress={Commit} color='#4A4843'/>
       <Button title="Git Push" onPress={Push} color='#A79B82'/>
    </View>
   )}
}
const styles = StyleSheet.create({
    button: { 
        marginTop: 45,
        ...Platform.select({
            android: {
                backgroundColor: '#A79B82',
                color: '#FF6D70',
            }
        })
    }
})    