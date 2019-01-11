import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitReset = () => {
   const goToStash = () => {
      Actions.gitStash()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Reset</Text>
         <Text>Oh shit button. Undoes all commits, preserving changes locally. Start over if needed.</Text>
         <Button 
         onPress = {goToStash}
         title= "Git Stash"
         />
      </TouchableOpacity>
   )
}
export default GitReset