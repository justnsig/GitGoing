import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
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
       <Button title="GitGoing Home" onPress={Home} />
       <Button title="Git Init" onPress={Init} />
       <Button title="Git Clone" onPress={Clone} />
       <Button title="Git Status" onPress={Status} />
       <Button title="Git Pull" onPress={Pull} />
       <Button title="Git Add" onPress={Add} />
       <Button title="Git Stash" onPress={Stash} />
       <Button title="Git Reset" onPress={Reset} />
       <Button title="Git Commit" onPress={Commit} />
       <Button title="Git Push" onPress={Push} />
    </View>
   )}
}
const styles = StyleSheet.create({
    button: { 
        marginTop: 45
    }
})