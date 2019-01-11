import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitAdd = () => {
   const goToCommit = () => {
      Actions.gitCommit()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Add</Text>
         <Text>Saves a snapshot of a file or all files. Get ready to Commit!</Text>
         <Button 
         onPress = {goToCommit}
         title= "Git Commit"
         />
      </TouchableOpacity>
   )
}
export default GitAdd