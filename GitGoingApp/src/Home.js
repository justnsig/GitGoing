import React from 'react'
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToGitInit = () => {
      Actions.gitInit()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }}>
         <Text style={styles.title}>GitGoing</Text>
         <Text style={{padding: 30}}>This is where A login would go</Text>
         <Text>Would you like to learn more?</Text>
         <Button 
         onPress = {goToGitInit}
         title= "GitGoing to Git Init"
         />
         <Text style = {{paddingTop: 120, fontWeight: 'bold'}}>This could be where we put a search or a picker</Text>
      </TouchableOpacity>
   )
}
const styles = StyleSheet.create({
   title: {
      fontSize: 30
   }
 });

export default Home