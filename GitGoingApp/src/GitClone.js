import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitClone = () => {
   const goToPull = () => {
      Actions.gitPull()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Clone</Text>
         <Text>Download a project to your computer.</Text>
         <Button 
         onPress = {goToPull}
         title= "Git Pull"
         />
      </TouchableOpacity>
   )
}
export default GitClone