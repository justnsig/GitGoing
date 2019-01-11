import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitPull = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Pull</Text>
         <Text>Downloads history and incorporates changes from Projects or repositories you have cloned.</Text>
         <Button 
         onPress = {goToHome}
         title= "Git Going Again!"
         />
      </TouchableOpacity>
   )
}
export default GitPull