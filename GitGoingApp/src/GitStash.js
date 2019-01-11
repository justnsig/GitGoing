import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitStash = () => {
   const goToPush = () => {
      Actions.gitPush()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Stash</Text>
         <Text>Stores incomplete changes.</Text>
         <Button 
         onPress = {goToPush}
         title= "Git Push"
         />
      </TouchableOpacity>
   )
}
export default GitStash