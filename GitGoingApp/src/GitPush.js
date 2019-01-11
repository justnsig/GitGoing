import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitPush = () => {
   const goToClone = () => {
      Actions.gitClone()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Push</Text>
         <Text>Uploads your changes to GitHub! Upload is like saving your file.</Text>
         <Button 
         onPress = {goToClone}
         title= "Git Clone"
         />
      </TouchableOpacity>
   )
}
export default GitPush