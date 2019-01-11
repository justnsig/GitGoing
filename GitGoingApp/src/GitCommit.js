import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitCommit = () => {
   const goToStatus = () => {
      Actions.gitStatus()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Commit</Text>
         <Text>Saves your snapshot permanently. Not ready yet? No worries.</Text>
         <Button 
         onPress = {goToStatus}
         title= "Git Status"
         />
      </TouchableOpacity>
   )
}
export default GitCommit