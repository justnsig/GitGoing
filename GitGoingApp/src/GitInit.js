import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitInit = () => {
   const goToGetAdd = () => {
      Actions.gitAdd()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Init</Text>
         <Text>Create a new local repository. Which is fancy speak for folder.</Text>
         <Button 
         onPress = {goToGetAdd}
         title= "GitGoing to Git Add"
         />
      </TouchableOpacity>
   )
}
export default GitInit